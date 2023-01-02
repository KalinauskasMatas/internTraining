const movie = (name, genre, rentalPrice, count) => {
  return {
    name: name,
    genre: genre,
    rentalPrice: rentalPrice,
    count: count
  }
}

const movies = [
  movie('The Godfather', 'Drama', 5.99, 3),
  movie('The Shawshank Redemption', 'Drama', 4.99, 5),
  movie('Schindler\'s List', 'Biography', 5.49, 2),
  movie('Raging Bull', 'Biography', 4.69, 1),
  movie('Casablanca', 'Drama', 3.99, 2),
  movie('Citizen Kane', 'Mystery', 4.99, 3),
  movie('Gone with the Wind', 'Romance', 2.99, 0),
  movie('The Wizard of Oz', 'Adventure', 5.99, 2)
]

const tableEl = document.getElementById('available-movies-table');

const renderTable = (movieList, tableElement) => {
  const tableList = movieList.reduce((prev, curr) => {
    return `${prev}
    <tr>
      <td>${curr.name}</td>
      <td>${curr.genre}</td>
      <td>${curr.rentalPrice}</td>
      ${curr.count > 0 ? 
        `<td class="isInStock"><img src="./assets/check.png" alt="Yes"></td>` :
        `<td class="isInStock"><img src="./assets/cross.png" alt="No"></td>`
      }
      <td class="movie-rent" onclick="rent(this, movies, tableEl)">Rent</td>
    </tr>
    `
  }, `
  <tr>
    <th>Name</th>
    <th>Genre</th>
    <th>Price for 12h</th>
    <th>Is in stock</th>
  </tr>
  `);
  tableElement.innerHTML = tableList;
}

renderTable(movies, tableEl);

const rent = (element, movieList, tableElement) => {
  const movieName = element.parentNode.children[0].textContent;
  const movieIndex = movieList.findIndex((e) => e.name === movieName);
  if (movieList[movieIndex].count === 0) return;
  movieList[movieIndex].count--;
  renderTable(movieList, tableElement)
}