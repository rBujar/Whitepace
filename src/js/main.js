const hamburger = document.querySelector(".header__hamburger")
const headerMenu = document.querySelector('.header__menu')

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active')
    headerMenu.classList.toggle('active')
    document.body.classList.toggle("no-scroll");
})
