let quotes = {
    "~Virginia Woolf": "'Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.'",
    "~Mahatma Gandhi": "'Freedom is not worth having if it does not include the freedom to make mistakes.'",
    "~Nelson Mandela": "'When a man is denied the right to live the life he believes in, he has no choice but to become an outlaw.'"
}

const btn = document.querySelector('#btn1');
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');

const authors = Object.keys(quotes);
let index = 0

btn.addEventListener('click', () => {
    index ++
    if(index >= authors.length ) index = 0
    author.textContent = authors[index]
    quote.textContent = quotes[authors[index]]
})