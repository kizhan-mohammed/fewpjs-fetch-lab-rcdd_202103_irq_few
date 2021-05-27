function fetchBooks() {
<<<<<<< HEAD
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
}
=======
  fetch ("https://anapioficeandfire.com/api/books")
  .then(function(response) {
    return response.JSON( );
  })
  .then(function(json) {
    return renderBooks(json);
  })
>>>>>>> 08577dc83c4b6325835a4ef2d8dbac4e3e49887e
  // To pass the tests, don't forget to return your fetch!
  


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
