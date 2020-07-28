export class Search {
  constructor(position) {
    this.search = document.querySelector(position)
    this.elasticItems = document.querySelectorAll(`${position} li`)
    this.deleteEl = document.querySelector(`${position} .search-none`)
  }
  open() {
    this.search.style.display = 'block'
  }

  close() {
    this.search.style.display = 'none'
  }

  toggle() {
    this.search.style.display === 'none' ? this.open() : this.close()
  }

  searchElement(e) {
    const value = e.target.value.trim().toLowerCase()
    if (value != '') {
      this.elasticItems.forEach(el => {
        const textEl = this.getTextInEl(el)

        if (textEl.innerText.toLowerCase().search(value) == -1) {
          el.classList.remove('active')
          this.#checkFindEl()
          textEl.innerHTML = textEl.innerText
        } else {
          el.classList.add('active')
          let str = textEl.innerText
          textEl.innerHTML = this.#selectFind(
            str,
            textEl.innerText.toLowerCase().search(value),
            value.length
          )
        }
      })
    } else {
      this.elasticItems.forEach(el => {
        const textEl = this.getTextInEl(el)
        el.classList.add('active')
        textEl.innerHTML = textEl.innerText
      })
      this.deleteEl.classList.add('hidden')
    }
  }

  #selectFind(str, pos, len) {
    return (
      str.slice(0, pos) +
      '<mark>' +
      str.slice(pos, pos + len) +
      '</mark>' +
      str.slice(pos + len)
    )
  }

  #checkFindEl() {
    this.search.querySelector('.active')
      ? this.deleteEl.classList.add('hidden')
      : this.deleteEl.classList.remove('hidden')
  }

  getTextInEl(el) {
    return el.querySelector('span') || document.createElement('span')
  }
}
