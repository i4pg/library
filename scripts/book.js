class Book {
  constructor(title, author, pages, read, img, description) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.img = img
    this.description = description
  }

  readToggle() {
    this.read = this.read ? false : true
  }
}
