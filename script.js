const movies = [
  {
    title: "Inception",
    year: 2010,
    poster: "https://via.placeholder.com/200x280?text=Inception"
  },
  {
    title: "Interstellar",
    year: 2014,
    poster: "https://via.placeholder.com/200x280?text=Interstellar"
  },
  {
    title: "The Batman",
    year: 2022,
    poster: "https://via.placeholder.com/200x280?text=Batman"
  },
  {
    title: "Avatar",
    year: 2009,
    poster: "https://via.placeholder.com/200x280?text=Avatar"
  }
];

function render(list) {
  const container = document.getElementById("movieList");
  container.innerHTML = "";

  list.forEach(movie => {
    const div = document.createElement("div");
    div.className = "movie-card";

    div.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>${movie.year}</p>
    `;

    container.appendChild(div);
  });
}

function searchMovie() {
  const value = document.getElementById("searchInput").value.toLowerCase();

  const filtered = movies.filter(movie =>
    movie.title.toLowerCase().includes(value)
  );

  render(filtered);
}

render(movies);
