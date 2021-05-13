let li = Array.from(document.querySelectorAll('li'));
const result = li.map(item => item.dataset.time)
    .map(time => {
        let [min, sec] = time.split(':');
        return min * 60 + parseInt(sec);
    }).reduce((now, next) => now + next, 0)
let sec = result % 60;
let min = (result - sec) / 60;
min %= 60;
let hour = Math.floor(result / 60 / 60);
console.log(hour, min, sec)