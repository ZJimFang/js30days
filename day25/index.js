//註冊一監聽器時 會由外向內去capture每一監聽器位置
//位置被觸發時會由內向外去bubbling
const divs = document.querySelectorAll('div');
function logText(e) {
    console.log(this.classList.value);
    e.stopPropagation();
}
divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,//預設 只執行bubbling
    // capture: true,//執行capture
    once: false,
    //once: true//執行一次後會直接unbind這個事件和元素
}))