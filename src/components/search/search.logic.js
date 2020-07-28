import { Search } from './Search'

const search = new Search('.search-items')

const searchInput = document.querySelector('.header-input')

document.addEventListener('click', e => {
  e.target !== searchInput ? search.close() : ''
})

searchInput.addEventListener('click', () => {
  search.toggle()
})

searchInput.addEventListener('input', e => {
  search.open()
  search.searchElement(e)
})
