
const display1 = document.getElementById("display-1")
const display2 = document.getElementById("display-2")


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        }
        else {
            entry.target.classList.remove("show")
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden, .hidden2")
hiddenElements.forEach((el) => observer.observe(el))