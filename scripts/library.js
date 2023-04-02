class Library {
  static changeBookStatus(id) {
    myLibrary[id].readToggle()
    this.updateLibrary()
  }
  static removeBook(id) {
    myLibrary.splice(id, 1)
    this.updateLibrary()
  }
  static addBookToLibrary() {
    myLibrary.reverse().forEach((book, i) => {
      Page.addBook(book, i)
    })
  }
  static updateLibrary() {
    books.innerHTML = ""
    this.addBookToLibrary()
    Page.addButtons()
  }
}

Library.updateLibrary() // To Add some books
