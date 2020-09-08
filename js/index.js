// Your code goes here

const bus = document.querySelector(".intro")
bus.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "purple"
})

bus.addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "white"
})

const bigBus = document.querySelector(".intro img")
bigBus.addEventListener("mouseenter", () => {
    bigBus.style.transform = "scale(2)"
    bigBus.style.transition = "transform 1s"
})

document.addEventListener("keydown", (event) => {
    if(event.key === "1") {
        document.body.style.backgroundColor = "green"
    }
})

document.addEventListener("keyup", (event) => {
    if(event.key === "2") {
        document.body.style.backgroundColor = "pink"
    }
})

bigBus.addEventListener("mouseleave", () => {
    bigBus.style.transform = "scale(1)"
    bigBus.style.transition = "transform 1s"
})

const cool = document.querySelector(".nav")
cool.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "purple"
})

const mapimg = document.getElementsByClassName("img-content") [0].querySelector("img")
mapimg.addEventListener("dblclick", (event) => {
    event.target.style.border = "solid blue 5em"
})

const scrollimg = document.querySelector("h2")
window.addEventListener("scroll", () => {
    scrollimg.style.color = "red"
})
















