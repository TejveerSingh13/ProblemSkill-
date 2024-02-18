const books = document.querySelectorAll("#book-list li .name");

books.forEach((book) => {
  book.textContent += " (book title)";
});

const bookList = document.querySelector("#book-list");
bookList.innerHTML = "<h2>Kidda Jatta?</h2>";
bookList.innerHTML += "<p>This is how you add html</p>";
