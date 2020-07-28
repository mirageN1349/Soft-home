import { Navbar } from './Navbar'

const nav = document.querySelector('.header-nav')

const navbar = new Navbar('.header-nav')

nav.addEventListener('click', e => {
  if (!e.target.classList.contains('header-link')) return
  e.preventDefault()
  navbar.toggle(e)
})

document.addEventListener('click', e => {
  if (!e.target.classList.contains('header-link')) {
    navbar.close()
  }
})
