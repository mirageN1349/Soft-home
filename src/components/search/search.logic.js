import { Search } from './Search'

const search = new Search('.search-items')

const searchInput = document.querySelector('.header-input')

document.addEventListener('click', e => {
  e.target !== searchInput
    ? (search.close(), searchInput.classList.remove('active-input'))
    : ''
})

searchInput.addEventListener('click', () => {
  search.toggle()
  searchInput.classList.toggle('active-input')
})

searchInput.addEventListener('input', e => {
  search.open()
  search.searchElement(e)
})
