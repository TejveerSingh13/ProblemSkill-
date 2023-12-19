const passBox = document.getElementById("password")
const generateButton = document.getElementById("generate")
const copy = document.getElementById("copy")

const length = 12
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = upperCase.toLowerCase()
const number = "1234567890"
const symbols = "!@#$%^&*(){}:<>?"

const allChar = upperCase+lowerCase+number+symbols

function createPassword() {
    let password = ""
    password += upperCase[Math.floor(upperCase.length*Math.random())]
    password += lowerCase[Math.floor(lowerCase.length*Math.random())]
    password += number[Math.floor(number.length*Math.random())]
    password += symbols[Math.floor(symbols.length*Math.random())]

    while(length > password.length){
        password += allChar[Math.floor(allChar.length*Math.random())]
    }

    passBox.value = password
}
function copyPassword(){
    passBox.select()
    document.execCommand("copy")
}

generateButton.addEventListener("click",()=> createPassword())
copy.addEventListener("click",()=> copyPassword())
