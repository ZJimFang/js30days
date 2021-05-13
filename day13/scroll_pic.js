const slideImages = document.querySelectorAll('.slide-in');

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function checkSlide() {
    // 視窗頂部y座標(也就是視窗的最上面的線)
    let windowTop = window.scrollY;
    // 視窗底部y座標(也就是視窗的最下面的線)
    let windowBottom = windowTop + window.innerHeight;
    console.log(windowTop, windowBottom);

    slideImages.forEach((img) => {
        let imgMiddle = img.offsetTop + img.height / 2;
        // offsetTop再加上圖片一半的高度
        // 做優化(圖片中間位置要小於視窗底部且大於視窗頂部)
        if (imgMiddle < windowBottom && imgMiddle > windowTop) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide))