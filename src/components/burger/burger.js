const burgerBtn = document.querySelector('.burger-btn')
const nav = document.querySelector('.header-nav')
document.body.style.overflowY = 'auto'

burgerBtn.addEventListener('click', burgerBtnClick)

function burgerBtnClick() {
  burgerBtn.classList.toggle('active')
  nav.classList.toggle('active')
  let scrollY = document.body.style.overflowY
  scrollY = scrollY === 'auto' ? 'hidden' : 'auto'

  document.body.style.overflowY = scrollY
}
