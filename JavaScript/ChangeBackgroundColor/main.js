const colors = ['red', 'yellow', 'blue', 'green', 'orange']
const HexData = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
let isHEX = false

const color = document.querySelector('.color')
const btn = document.getElementById('btn')
const simple = document.querySelector('.simple')
const hex = document.querySelector('.HEX')

simple.addEventListener('click',() => {
    isHEX = false
})
hex.addEventListener('click',() => {
    isHEX = true
})
btn.addEventListener('click',() => {
    if (isHEX) {
        let newColor = '#'
        for (let i = 0; i < 6; i++) {
            newColor += HexData[randomNumber(isHEX)]
        }
        color.textContent = newColor
        document.body.style.backgroundColor = newColor
    }
    else{
        let newColor = colors[randomNumber(isHEX)]
        color.textContent = newColor
        document.body.style.backgroundColor = newColor
    }
})
const randomNumber = (isHex) => {
    if(isHex) return Math.floor(Math.random()*HexData.length)
    else return Math.floor(Math.random()*colors.length)
}
