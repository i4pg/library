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
