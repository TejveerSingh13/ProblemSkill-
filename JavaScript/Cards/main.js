const data = [
  {
    id: 0,
    name: "Rajdip Kaur",
    profile: "QA Automation",
    img: "./img.jpg",
    description: "lorem epusum kuch toh"
  },
  {
    id: 1,
    name: "Tejveer Singh",
    profile: "Web Developer",
    img: "./img.jpg",
    description: "lorem epusum kuch toh tejveer k liye"
  },
  {
    id: 2,
    name: "Rajpreet Kaur",
    profile: "Manager/Analyst",
    img: "./img.jpg",
    description: "lorem epusum kuch toh for Rajpreet"
  }
]

const img = document.querySelector('.image-profile')
const user = document.querySelector('.name')
const profile = document.querySelector('.profile')
const description = document.querySelector('.description')
const left = document.querySelector('#left')
const right = document.querySelector('#right')
const random = document.querySelector('#random')

let current  = 0

const setData = () => {
  const currentData = data[current]
  img.setAttribute('src',currentData.img)
  user.textContent = currentData.name
  profile.textContent = currentData.profile
  description.textContent = currentData.description
}

window.addEventListener('DOMContentLoaded', () => {
  setData()
})
right.addEventListener('click', () => {
  current ++
  if(current > data.length -1) current = 0
  setData()
})
left.addEventListener('click', () => {
  current --
  if(current < 0) current = data.length -1
  setData()
})
random.addEventListener('click', () => {
  current = Math.floor(Math.random()*data.length)
  console.log(current)
  setData()
})
