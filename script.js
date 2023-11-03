// Lựa chọn và sắp xếp danh sách "books"
const books = document.querySelector('#books');
const bookListItems = Array.from(books.querySelectorAll('li'));

bookListItems.sort((a, b) => {
  if (a.textContent < b.textContent) {
    return 1;
  } else if (a.textContent > b.textContent) {
    return -1;
  } else {
    return 0;
  }
});

bookListItems.forEach((item) => {
  books.appendChild(item);
});

// Lựa chọn và sắp xếp danh sách "movie"
const movies = document.querySelector('#movie');
const movieListItems = Array.from(movies.querySelectorAll('li'));

movieListItems.sort((a, b) => {
  if (a.textContent < b.textContent) {
    return 1;
  } else if (a.textContent > b.textContent) {
    return -1;
  } else {
    return 0;
  }
});

movieListItems.forEach((item) => {
  movies.appendChild(item);
});
