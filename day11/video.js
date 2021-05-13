//select
const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const slides = document.querySelectorAll('.player__slider');
const range = document.querySelector('.progress__filled');
const progress = document.querySelector('.progress');
let mousedown = false;

//function
function togglePlay() {
    if (video.paused) {
        video.play();
        toggle.textContent = '❚ ❚';
    } else {
        video.pause();
        toggle.textContent = '►';
    }
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}
function handleSlide() {
    video[this.name] = this.value;
}
function handleRange() {
    const percent = (video.currentTime / video.duration) * 100;
    range.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

//eventListener
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleRange);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
slides.forEach(slide => slide.addEventListener('change', handleSlide));
slides.forEach(slide => slide.addEventListener('mousemove', handleSlide));
range.addEventListener('change', handleRange)
range.addEventListener('mousemove', handleRange)
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);