const testimonial = [
    {
        name: "Cherise G",
        photoUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Aplle.",
    },
    {
        name: "Rosseta Q",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I want pizza XD",
    },
    {
        name: "Constantive V",
        photoUrl: "https://images.unsplash.com/photo-1655293459479-cacd56abeaf6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Wow, fantastic, I'm totally blown away by Testimonal Generator!",
    },
]
const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const usernameEl = document.querySelector(".username")

let idx = 0

updateTestimonial()

function updateTestimonial(){
    const {name, photoUrl, text} = testimonial[idx]
    testimonial[idx]

    imgEl.src = photoUrl
    textEl.innerText = text
    usernameEl.innerText = name
    idx++

    if(idx === testimonial.length){
        idx = 0
    }

    setTimeout(() => {
        updateTestimonial()
    }, 4000)
}