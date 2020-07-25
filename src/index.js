import './scss/index.scss'
import './components/burger/burger'
import './components/like/like.state'

document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.header-input'),
    hide = document.querySelectorAll('.hide')

  if (document.documentElement.clientWidth <= 768) {
    hide.forEach(el => (el.style.display = 'none'))

    input.addEventListener('click', inputClick)

    function inputClick() {
      input.value = ''
      input.classList.toggle('active')
    }
  }
})
