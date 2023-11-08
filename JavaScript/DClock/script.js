const calTime = () => {
    let date = new Date()
    let dayNum = date.getDay()
    let hr = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    let ampm = hr >= 12 ? 'PM' : 'AM'
    const dayName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    hr = hr%12
    hr = hr ? hr : '12'
    hr = hr < 10 ? '0' + hr : hr
    min = min < 10 ? '0' + min : min
    sec = sec < 10 ? '0' + sec : sec

    document.getElementById("day").innerHTML = dayName[dayNum]
    document.getElementById("hour").innerHTML = hr
    document.getElementById("min").innerHTML = min
    document.getElementById("sec").innerHTML = sec
    document.getElementById("ampm").innerHTML = ampm

    setTimeout(calTime, 1000)
}

window.addEventListener('load', calTime)