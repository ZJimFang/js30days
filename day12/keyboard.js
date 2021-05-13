const pressed = [];
const secretCode = 'jimgood';
document.addEventListener('keyup', e => {
    pressed.push(e.key)
    if (pressed.length > secretCode.length) {
        pressed.splice(0, 1);
    }
    if (pressed.join('').includes(secretCode)) {
        cornify_add();
    }
})
var ary = ['Wind', 'Rain', 'Fire'];
console.log(ary.join(''));