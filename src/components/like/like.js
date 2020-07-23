import { localStorageHelper } from '../../core/localStorage'
const storage = localStorageHelper()

const like = document.querySelector('.program-like'),
  likeText = document.querySelector('.program-like span'),
  likeImg = document.querySelector('.program-like__img')

like.addEventListener('click', btnLikeClick)

likeText.innerHTML = parseInt(storage.getItem('likeText')) || 120
checkLikeState(121)

storage.setItem('likeText', likeText.innerHTML)

function checkLikeState(state) {
  if (likeText.innerHTML == state) {
    like.classList.add('active')
    likeImg.classList.add('active')
  } else {
    likeImg.classList.remove('active')
    like.classList.remove('active')
  }
}

function btnLikeClick() {
  checkLikeState(120)
  let counter = parseInt(storage.getItem('likeText'))
  counter === 120
    ? storage.setItem('likeText', counter + 1)
    : storage.setItem('likeText', counter - 1)

  likeText.innerHTML = parseInt(storage.getItem('likeText'))
}
