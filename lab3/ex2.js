const fs = require("node:fs");

async function fetchMovies() {
  const response = await fetch("https://api.sampleapis.com/movies/animation");
  const movies = await response.json();
  const titles = movies.map((movie) => movie.title);
  console.log(titles);
  return titles;
}

async function saveTitles(titles) {
  const data = JSON.stringify(titles, null, 2);
  await fs.promises.writeFile("animationTitles.json", data);
}

async function main() {
  const titles = await fetchMovies();
  await saveTitles(titles);
}

main();
