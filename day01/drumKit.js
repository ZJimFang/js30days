window.onload = function () {
    const keys = Array.from(document.querySelectorAll(".key"));
    keys.forEach(key => document.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSong);

    function removeTransition(e) {
        e.target.classList.remove("playing");
    }
    function playSong(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        if (!audio) return;
        key.classList.add("playing");
        audio.currentTime = 0;//播放進度條放回起點
        audio.play();
    }
}