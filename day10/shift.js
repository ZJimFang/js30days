window.onload = function () {
    const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');
    checkBoxes.forEach(checkBox => checkBox.addEventListener('click', handleCheck));
    let lastChecked;
    function handleCheck(e) {
        let isBetween = false;
        if (e.shiftKey && this.checked) {
            checkBoxes.forEach(checkBox => {
                if (checkBox === this || checkBox === lastChecked) {
                    isBetween = !isBetween;
                }
                if (isBetween) {
                    checkBox.checked = true;
                }
            });
        }
        lastChecked = this;
    }
}