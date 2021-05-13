const triggers = document.querySelectorAll('.cool>li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter))
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave))

function handleEnter(e) {
    const showItem = e.target;
    showItem.classList.add('trigger-enter');
    setTimeout(function () {
        if (showItem.classList.contains('trigger-enter')) {
            showItem.classList.add('trigger-enter-active');
        }
    }, 150)
    background.classList.add('open');
    const dropdown = this.querySelector('.dropdown');
    //取得該子元素的大小及位置資料
    const dropdownCoords = dropdown.getBoundingClientRect();
    //取得 <nav> 元素的大小及位置資料
    const navCoords = nav.getBoundingClientRect();
    background.style.width = `${dropdownCoords.width}px`;
    background.style.height = `${dropdownCoords.height}px`;
    background.style.top = `${dropdownCoords.top - navCoords.top}px`;
    background.style.left = `${dropdownCoords.left - navCoords.left}px`;
}

function handleLeave(e) {
    const missItem = e.target
    missItem.classList.remove('trigger-enter', 'trigger-enter-active')
    background.classList.remove('open');
}