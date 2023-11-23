const apiKey = '3d4d1e699b90816ce86f9c0d217c0eaf';
const api = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q='

const condition = document.querySelector('.condition')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')
const error = document.querySelector('.error')
const container = document.querySelector('.weather-container')

const input = document.getElementById('input')
const searchbtn = document.getElementById('button')
const weatherImg = document.querySelector('.weatherImg')

let load = true

const checkWeather = async (cityname) => {
    let response = await fetch(api + cityname + `&appid=${apiKey}`)
    if(response.status === 404){
        if(!load) error.style.display = 'block'
        container.style.display = 'none'
    }else{
        let data = await response.json()

        if(data) error.style.display = 'none'
        city.innerHTML = data.name
        temp.innerHTML = Math.floor(data.main.temp) + `°C`
        humidity.innerHTML = data.main.humidity + '%'
        wind.innerHTML = data.wind.speed + 'km/hr'

        let weather = data.weather[0].main
        condition.innerHTML = weather
        if(weather === 'Clouds') weatherImg.src = "./images/clouds.png"
        else if(weather === 'Clear') weatherImg.src = "./images/clear.png"
        else if(weather === 'Rain') weatherImg.src = "./images/rain.png"
        else if(weather === 'Drizzle') weatherImg.src = "./images/drizzle.png"
        else if(weather === 'Mist') weatherImg.src = "./images/mist.png"
        else if(weather === 'Slow') weatherImg.src = "./images/snow.png"   

        container.style.display = 'block'
    }
}
checkWeather('denver')
searchbtn.addEventListener("click",  ()=>{
    if(input.value) {
        load = false
        checkWeather(input.value)
        input.value = ''
    }
})
document.addEventListener("keydown", (e)=>{
    if(e.code == 'Enter'){
        if(input.value) {
            load = false
            checkWeather(input.value)
            input.value = ''
        } 
    }
})