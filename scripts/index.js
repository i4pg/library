const myLibrary = [];

function Book(title, author, pages, read, img, description) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.img = img
  this.description = description
}

function addBookToLibrary(title, author, pages, read, img, description) {
  let newBook = new Book(title, author, pages, read, img, description)
  myLibrary.push(newBook)
}

addBookToLibrary(1, 1, 1, 1, 1, 1)
addBookToLibrary(2, 2, 3, 4, 4, 4)
console.log(myLibrary)
