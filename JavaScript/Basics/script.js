
let button1 = document.getElementById('button1')

button1.addEventListener('click', ()=>{
    let username = document.getElementById('text1').value
    let password = document.getElementById('text2').value
    if(username === 'tj' && password === 'tj') alert('Kidda Singh! 😘')
    else alert('Kidda Stranger😡!')
})

// let button2 = document.getElementById('button2')

// button2.addEventListener('click', ()=>{
//     let rd1 = document.getElementById('rd1')
//     let rd2 = document.getElementById('rd2')
//     if(rd1.checked === true) alert(`you feel ${rd1.value} today Tejveer`)
//     else if(rd2.checked === true) alert(`you feel ${rd2.value} today Tejveer`)
//     else alert(`you feel nothing 😶‍🌫️😶‍🌫️😶‍🌫️ today Tejveer`)
// })

let radios = document.querySelectorAll('input[name="feeling"]')
radios.forEach(radio => {
    radio.addEventListener('change', () => {
        let value = radio.value
        setTimeout(()=>{
            alert(value)
        }, 1)
    })
})



