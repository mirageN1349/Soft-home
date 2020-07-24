export class Like {
  static create(counter, softName) {
    return fetch(`https://soft-zilla.firebaseio.com/${softName}.json`, {
      method: 'PUT',
      body: JSON.stringify(counter),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(Like.renderLike)
  }
  static renderLike(res) {
    const currentLikeCounter = document.querySelector(
      `.${res.softName} .program-like__text`
    )

    currentLikeCounter.textContent = res.counter || 0
  }
}
