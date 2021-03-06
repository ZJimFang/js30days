const nav = document.querySelector('nav');
const topNav = nav.offsetTop;

function fixNav() {
    if (window.scrollY >= topNav) {
        document.body.classList.add('fixed-nav');
        document.body.style.paddingTop = nav.offsetHeight + 'px';
    } else {
        document.body.classList.remove('fixed-nav')
        document.body.style.paddingTop = 0;
    }
}
document.addEventListener('scroll', fixNav)