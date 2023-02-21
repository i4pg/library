let myLibrary = [
  new Book(
    "You Don't Know JS Yet: Get Started",
    "Kyle Simpson",
    145,
    false,
    "https://d2sofvawe08yqg.cloudfront.net/ydkjsy-get-started/s_hero?1620621982",
    `It seems like there's never been as much widespread desire before to learn JS. But with a million blogs, books, and videos out there, just where do you start?

Get Started prepares you for the journey ahead, first surveying the language then detailing how the rest of the You Don't Know JS Yet book series guides you to knowing JS more deeply.`
  ),
  new Book(
    "The Principles of Object-Oriented JavaScript",
    "Nicholas C. Zakas",
    120,
    false,
    "https://m.media-amazon.com/images/I/518hypqfQVL._SX376_BO1,204,203,200_.jpg",
    `If you've used a more traditional object-oriented language, such as C++ or Java, JavaScript probably doesn't seem object-oriented at all. It has no concept of classes, and you don't even need to define any objects in order to write code. But don't be fooled—JavaScript is an incredibly powerful and expressive object-oriented language that puts many design decisions right into your hands.`
  ),
  new Book(
    "CSS in 44 minutes",
    "jgthms",
    44,
    false,
    "https://jgthms.com/books/css44/cover/css-in-44-minutes-book-cover.png",
    "Learn how to build your own webpage from scratch with my step by step guide"),
  new Book(
    "Practical Object-Oriented Design",
    "Sandi Metz",
    288,
    false,
    "https://m.media-amazon.com/images/I/51OcKK1cUPL.jpg",
    `The Complete Guide to Writing Maintainable, Manageable, Pleasing, and Powerful Object-Oriented Applications`
  )
];

const formInnerHTML = `
      <form class="is-half is-offset-one-quarter column">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Book</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input title="title" class="input" type="text" placeholder="Title">
                <span class="icon is-small is-left">
                  <i class="fa-solid fa-book"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control is-expanded has-icons-left has-icons-right">
                <input class="input" type="text" title="author" placeholder="Author" value="">
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label"></div>
          <div class="field-body">
            <div class="field is-expanded">
              <div class="field has-addons">
                <p class="control">
                  <a class="button is-static">
                    pages
                  </a>
                </p>
                <p class="control is-expanded">
                  <input class="input" type="number" placeholder="400" title="pages">
                </p>
              </div>
            </div>
          </div>
        </div>
<!--
        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">Done Read?</label>
          </div>
          <div class="field-body">
            <div class="field is-narrow">
              <div class="control" title="read">
                <label class="radio">
                  <input type="radio" name="member">
                  Yes
                </label>
                <label class="radio">
                  <input type="radio" name="member">
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
-->
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Image</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input" type="text" placeholder="https://www.example.com/123/png" title="img">
              </div>
              <p class="help">
                Insert a URL for the book's image
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Descreption</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <textarea class="textarea" placeholder="Explain what deos this book about" title="description"></textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <!-- Left empty for spacing -->
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <button class="button is-primary" id="submit">
 <span class="icon is-small">
      <i class="fas fa-check"></i>
    </span>
<span>Add Book</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
`
const form = document.getElementById("frm")
const books = document.getElementById("books")
const newBookBtn = document.getElementById("new-book")
let formShown = false

function Book(title, author, pages, read, img, description) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.img = img
  this.description = description
}

Book.prototype.readToggle = function() {
  return this.read = this.read ? false : true
}

function addBook(book, i) {
  document.getElementById("books")
    .insertAdjacentHTML("beforeend", `
<div class="card column is-half " id="book_${i}">
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-128x128">
          <img src="${book.img}" alt="${book.title}">
        </figure>
        <hr>
      </div>
      <div class="media-content">
        <p class="title is-5">${book.title}</p>
        <p class="subtitle is-6">@${book.author}</p>
        <p class="subtitle is-7"><strong>${book.pages} pages</strong></p>
      </div>
    </div>

    <div class="content">
      ${book.description}
    </div>
    <div class="card">
      <footer class="card-footer">
        ${book.read ? "<button title='status' class='card-footer-item button is-success is-small'>Done Reading</button>"
        : "<button class='button is-info card-footer-item is-small' title='status'>In progress</button>"}
        <button title="remove" class="card-footer-item button is-danger is-small">Remove</button>
      </footer>
    </div>
  </div>
</div>
`)
}

function removeBook(id) {
  myLibrary.splice(id, 1)
  updateLibrary()
}

function changeBookStatus(id) {
  myLibrary[id].readToggle()
  updateLibrary()
}

function addRemoveBtn() {
  document
    .querySelectorAll("[title='remove']")
    .forEach(card => {
      card
        .addEventListener(
          "click", (e) => removeBook(e
            .target
            .parentNode
            .parentNode
            .parentNode
            .parentNode
            .id
            .split("_")[1], 1) // book_212
        )
    })
}

function addStatusToggleBtn() {
  document
    .querySelectorAll("[title='status']")
    .forEach(card => {
      card
        .addEventListener(
          "click", (e) => changeBookStatus(e
            .target
            .parentNode
            .parentNode
            .parentNode
            .parentNode
            .id
            .split("_")[1], 1) // book_212
        )
    })
}

function addBookToLibrary() {
  myLibrary.reverse().forEach((book, i) => {
    addBook(book, i)
  })
  addRemoveBtn()
  addStatusToggleBtn()
}

function hideForm() {
  form.removeChild(document.getElementsByTagName("form")[0])
  formShown = false
}

function formShownotification() {
  form.insertAdjacentHTML("beforeend", `
<div class="notification is-primary">
  <button class="delete"></button>
Book has been added successfully.
</div>
`)
  removeBtn()
}

// from bulma.io, to delete notification
function removeBtn() {
  document.addEventListener('click', () => {
    (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
      const $notification = $delete.parentNode;

      $delete.addEventListener('click', () => {
        $notification.parentNode.removeChild($notification);
      });
    });
  });
}

function submitBtn() {
  const newBook = new Book(
    document.querySelector("[title='title']").value,
    document.querySelector("[title='author']").value,
    document.querySelector("[title='pages']").value,
    false,
    document.querySelector("[title='img']").value,
    document.querySelector("[title='description']").value
  )

  myLibrary.push(newBook)
  hideForm()
  formShownotification()
  updateLibrary()
}

newBookBtn.addEventListener("click", () => {
  if (formShown) {
    hideForm()
  } else {
    formShown = true
    form.insertAdjacentHTML("beforeend", formInnerHTML)
    const submit = document.getElementById("submit")

    submit.addEventListener("click", (e) => {
      e.preventDefault()
      submitBtn()
    })
  }
})

function updateLibrary() {
  books.innerHTML = ""
  addBookToLibrary()
}

updateLibrary()
