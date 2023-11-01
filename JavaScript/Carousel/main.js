let index = 0

let leftA = document.getElementById('prev')
let rightA = document.getElementById('next')
let images = document.getElementsByClassName("image")
let dots = document.getElementsByClassName("dot")

const blockImage = () => {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none"
  }
}

const deactivateDots = () => {
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }
}

const activeImageDot = (i) => {
  images[i].style.display = "block"
  dots[i].className += " active"
}

const Initi = () => {
  blockImage()
  deactivateDots()
  index = 0
  activeImageDot(index)
}

leftA.addEventListener('click', ()=>{
  index --
  blockImage()
  deactivateDots()
  if(index<0) index = images.length -1
  activeImageDot(index)
})

rightA.addEventListener('click', ()=>{
  index ++
  blockImage()
  deactivateDots()
  if(index>images.length -1) index = 0
  activeImageDot(index)
})

Initi()

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", () => {
    index = i
    blockImage()
    deactivateDots()
    activeImageDot(index)
  })
  
}