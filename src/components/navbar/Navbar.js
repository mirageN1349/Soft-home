export class Navbar {
  constructor(navbar) {
    this.navbarLinks = document.querySelectorAll(`${navbar} .header-link`)
    this.navbarActiveEl = document.querySelectorAll(`${navbar} div`)
  }

  open(e) {
    this.#getActiveElement(e.target).classList.toggle('hidden')
    e.target.classList.toggle('active')
  }

  close() {
    this.navbarActiveEl.forEach(el => {
      el.classList.add('hidden')
    })
    this.navbarLinks.forEach(link => {
      link.classList.remove('active')
    })
  }

  toggle(e) {
    this.navbarLinks.forEach(el => {
      if (el !== e.target) {
        el.classList.remove('active')
        this.#getActiveElement(el).classList.add('hidden')
      }
    })
    this.open(e)
  }

  #getActiveElement(el) {
    const id = el.getAttribute('href')
    return document.querySelector(id)
  }
}
