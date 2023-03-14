const login =document.querySelector(".login")
const login__box =document.querySelector(".login__box")
const overlie =document.querySelector(".overlie")
const icon =document.querySelector(".menyu__icon")
const menyu =document.querySelector(".menyu")
// const btn =document.querySelector(".btn")
// const quick =document.querySelector(".Quick")
// const card =document.querySelector(".menyu")


window.addEventListener(`DOMContentLoaded`, () =>{
    const loader =document.querySelector('.loader')
    setTimeout(() =>{
        loader.style.opacity ="0"
        loader.style.display ="none"
    }, 2000)
})
login.addEventListener(`click`, () => {
    login__box.classList.remove('hidden')
    overlie.classList.remove('hidden')
})
overlie.addEventListener(`click`, () =>{
    login__box.classList.add('hidden')
    overlie.classList.add('hidden')
})
icon.addEventListener(`click`, ()=> {
    menyu.classList.remove('hidden')
})

