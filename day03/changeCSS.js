//抓spacing base的值更改 border和顏色
//抓blur的值改filter:blur();
window.onload = function () {
    const all = document.querySelectorAll(".controls input");
    function change_value() {
        const suffix = this.dataset.sizing || '';//因為顏色沒有value所以設空值
        // console.log(this);
        //console.log(this.dataset);//data-* attribute
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);//進到css設定變數
        // console.log(document.documentElement);
    }
    all.forEach(input => input.addEventListener('change', change_value));
    all.forEach(input => input.addEventListener('mousemove', change_value));
}
