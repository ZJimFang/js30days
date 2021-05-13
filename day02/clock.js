window.onload = function () {
    const setHourStyle = document.querySelector(".hour-hand");
    const setMinStyle = document.querySelector(".min-hand");
    const setSecStyle = document.querySelector(".second-hand");

    setInterval(getNow, 1000);
    function getNow() {
        const now = new Date();
        const second = now.getSeconds();
        const minute = now.getMinutes();
        const hour = now.getHours();
        document.querySelector(".timer").innerHTML = now.getHours().toString() + ":" + now.getMinutes().toString() + ":" + now.getSeconds().toString();
        const secondNow = (second / 60) * 360;
        const minuteNow = (minute / 60) * 360 + ((second / 60) * 6);
        const hourNow = (hour / 12) * 360 + ((minute / 60) * 30)
        setSecStyle.style.transform = `rotate(${secondNow + 90}deg)`;
        setMinStyle.style.transform = `rotate(${minuteNow + 90}deg)`;
        //分鐘的度數加上現在的秒數位置*6(60秒 分針走6度)
        setHourStyle.style.transform = `rotate(${hourNow + 90}deg)`;
        //(60分鐘 時針走30度)
    }
}