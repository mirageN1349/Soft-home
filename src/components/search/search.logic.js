import { Search } from './Search'
import { Navbar } from '../navbar/Navbar'

const search = new Search('.search-items')
const navbar = new Navbar('.header-nav')

const searchInput = document.querySelector('.header-input')

document.addEventListener('click', e => {
  e.target !== searchInput
    ? (search.close(), searchInput.classList.remove('active-input'))
    : ''
})

searchInput.addEventListener('click', () => {
  navbar.close()
  search.toggle()
  searchInput.classList.toggle('active-input')
})

searchInput.addEventListener('input', e => {
  search.open()
  searchInput.classList.add('active-input')
  search.searchElement(e)
})
