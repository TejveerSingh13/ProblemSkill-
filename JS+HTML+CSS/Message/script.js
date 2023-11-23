const submitB = document.querySelector('#submit')
const messageInput = document.getElementById("message-input")

const getMessage = () => {
    document.getElementById("message-output").innerHTML = messageInput.value
    messageInput.value = ''
}
messageInput.addEventListener("keydown", (event) => {
    if(event.key == "Enter") getMessage()
})
submitB.addEventListener('click', getMessage)