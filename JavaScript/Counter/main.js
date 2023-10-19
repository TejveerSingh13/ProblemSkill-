let count = 0

const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const className = e.target.className
        console.log(className)
        if(className.includes('reset')) {count = 0; value.textContent = count}
        else if (className.includes('decrement')) {count --; value.textContent = count}
        else {count ++; value.textContent = count}
        if(count > 0) value.style.color = 'green'
        else if(count === 0) value.style.color = 'black'
        else value.style.color = 'red'
    })
})