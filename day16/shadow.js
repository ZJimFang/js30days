const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500;
function shadow(e) {
    const width = hero.offsetWidth;//hero寬 隨視窗大小改變
    const height = hero.offsetHeight;//hero高 隨視窗大小改變
    let x = e.offsetX;
    let y = e.offsetY;
    //可能會讀到children
    if (this !== e.target) {//this:hero e.target:移到h1會變h1
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    const xWalk = (x / width * walk) - (walk / 2);
    const yWalk = (y / width * walk) - (walk / 2);
    text.style.textShadow = `
     ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
     ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
     ${yWalk}px ${xWalk * -1}px 0 rgba(255, 0, 0, 0.7),
     ${yWalk * -1}px ${xWalk}px 0 rgba(0, 0, 255, 0.7)
     `
}
hero.addEventListener('mousemove', shadow)
