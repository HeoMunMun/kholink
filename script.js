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

// Lấy danh sách tất cả các thẻ a trong ul
    var links = document.querySelectorAll('#linkList a');

    // Duyệt qua từng thẻ a và thêm sự kiện click
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Ngăn chặn hành động mặc định của thẻ a (mở trang mới)
            event.preventDefault();

            // Lấy href của thẻ a được click
            var originalLink = link.getAttribute('href');

            // Tạo đường link mới với token và đích đến mong muốn
            var newLink = 'https://web1s.com/st?token=cd653021-e55d-475b-b96b-247b5f38932d&url=' + encodeURIComponent(originalLink);

            // Mở tab mới với đường link mới
            window.open(newLink, '_blank');
        });
    });
