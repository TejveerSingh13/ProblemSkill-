const icon = document.querySelector('.tray-icon')

icon.addEventListener('click', () => {
    icon.classList.toggle('tray-icon-active')
})
console.log(icon);