class Page {
  static removeBtn() { // from bulma.io, to delete notification
    document.addEventListener('click', () => {
      (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
        const $notification = $delete.parentNode;

        $delete.addEventListener('click', () => {
          $notification.parentNode.removeChild($notification);
        });
      });
    });
  }

  static formShowNotification() {
    form.insertAdjacentHTML("beforeend", `
<div class="notification is-primary">
  <button class="delete"></button>
Book has been added successfully.
</div>
`)
    this.removeBtn()
  }

  static submitBtn() {
    const newBook = new Book(
      document.querySelector("[title='title']").value,
      document.querySelector("[title='author']").value,
      document.querySelector("[title='pages']").value,
      false,
      document.querySelector("[title='img']").value,
      document.querySelector("[title='description']").value
    )

    myLibrary.push(newBook)
    this.hideForm()
    this.formShowNotification()
    Library.updateLibrary()
  }

  static hideForm() {
    form.removeChild(document.getElementsByTagName("form")[0])
    formShown = false
  }

  static addButtons() {
    this.addRemoveBtn()
    this.addStatusToggleBtn()
  }

  static addStatusToggleBtn() {
    document
      .querySelectorAll("[title='status']")
      .forEach(card => {
        card
          .addEventListener(
            "click", (e) => Library
              .changeBookStatus(e.target
                .parentNode
                .parentNode
                .parentNode
                .parentNode
                .id
                .split("_")[1], 1) // book_212
          )
      })
  }

  static addRemoveBtn() {
    document
      .querySelectorAll("[title='remove']")
      .forEach(card => {
        card
          .addEventListener(
            "click", (e) => {
              Library.removeBook(e
                .target
                .parentNode
                .parentNode
                .parentNode
                .parentNode
                .id
                .split("_")[1]) // book_212
            }
          )
      })
  }

  static addBook(book, i) {
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
}
