// Your code goes here

const bus = document.querySelector(".intro")
bus.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "purple"
})

const bigBus = document.querySelector(".intro img")
bigBus.addEventListener("mouseenter", () => {
    bigBus.style.transform = "scale(2)"
    bigBus.style.transition = "transform 1s"
})


bigBus.addEventListener("mouseleave", () => {
    bigBus.style.transform = "scale(1)"
    bigBus.style.transition = "transform 1s"
})

const cool = document.querySelector(".nav")
cool.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "purple"
})







