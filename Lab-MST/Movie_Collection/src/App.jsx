import { useState } from "react";
import MovieCollection from "./components/MovieCollection";
import "./App.css";

export default function App() {
  const [movies, setMovies] = useState([
    { title: "Bahubali", Genre: "Adventure", Rating: "9/10" },
    { title: "Deva", Genre: "Thriller", Rating: "7/10" },
    { title: "Kill", Genre: "Thriller", Rating: "9.5/10" },
    { title: "Kalki", Genre: "Adventure", Rating: "9/10" },
    { title: "Coolie", Genre: "Mass", Rating: "7/10" },
    { title: "Mahabharat", Genre: "devotional", Rating: "9.5/10" },
  ]);

  const removeMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  return (
    <div className="app-wrapper">
      <div className="container">
        <h2>Movie Collection</h2>
        <MovieCollection movies={movies} removeMovie={removeMovie} />
      </div>
    </div>
  );
}
