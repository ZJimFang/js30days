const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('textarea').value;

function populateVoices() {
    voices = this.getVoices();
    const voiceOptions = voices
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join('');
    voicesDropdown.innerHTML = voiceOptions;
}
function setVoice() {
    msg.voices = voices.find(voice => voice.name === this.value);
    toggle();
}
function toggle(startOver = true) {
    speechSynthesis.cancel();//可清除目前的設定
    if (startOver) {
        speechSynthesis.speak(msg);
    }
}
function setOption() {
    msg[this.name] = this.value;
    toggle();
}
voicesDropdown.addEventListener('change', setVoice);
speechSynthesis.addEventListener('voiceschanged', populateVoices);
options.forEach(option => {
    option.addEventListener('input', setOption);
})
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));