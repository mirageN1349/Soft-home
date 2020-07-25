import { Like } from './Like'
import { localStorageHelper } from '../../core/localStorage'

const storage = localStorageHelper()

const likeArr = document.querySelectorAll('.program-like')

likeArr.forEach(like => {
  likeClick(like, false)()
  like.addEventListener('click', likeClick(like, true))
})

function likeClick(like, changeLikeState) {
  const programs = ['skype', 'whatsapp', 'zoom']
  return function () {
    if (changeLikeState) like.disabled = true
    programs.forEach(program => {
      const currentLike = like.closest(`.${program}`)
      if (currentLike) {
        const softName = currentLike.classList[1]
        getRequest(softName, changeLikeState, program, like)
      }
    })
  }
}

function getRequest(softName, changeLikeState, program, currentLike) {
  const prevLikeState = storage.getItem(program) || false
  const currentImg = currentLike.querySelector('.program-like__img')
  const likeNodes = [currentLike, currentImg]

  fetch(`https://soft-zilla.firebaseio.com/${softName}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(res => {
      prevLikeState
        ? likeNodes.forEach(node => node.classList.add('active'))
        : likeNodes.forEach(node => node.classList.remove('active'))

      let counter = res.counter || 0

      if (changeLikeState) {
        storage.setItem(program, prevLikeState)

        counter = checkLikeStateFromStorage(
          prevLikeState,
          likeNodes,
          counter,
          program,
          res
        )
      }

      const text = {
        counter,
        softName,
      }

      putRequest(text, softName, currentLike)
    })
}

function checkLikeStateFromStorage() {
  let [prevLikeState, likes, counter, program, res] = arguments

  if (prevLikeState === false) {
    likes.forEach(node => node.classList.add('active'))
    counter = res.counter + 1
    storage.setItem(program, true)
  } else {
    likes.forEach(node => node.classList.remove('active'))
    counter = res.counter - 1
    storage.setItem(program, false)
  }

  return counter
}

function putRequest(text, softName, currentLike) {
  Like.create(text, softName).then(() => {
    currentLike.disabled = false
  })
}
