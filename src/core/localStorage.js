export function localStorageHelper() {
  return {
    setItem(nameItem, body) {
      localStorage.setItem(nameItem, JSON.stringify(body))
    },
    getItem(nameItem) {
      return JSON.parse(localStorage.getItem(nameItem))
    },
  }
}
