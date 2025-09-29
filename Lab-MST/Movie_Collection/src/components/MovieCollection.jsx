export default function MovieCollection({ movies, removeMovie }) {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <div key={index} className="movie-item">
          <strong>{movie.title}</strong> | {movie.Genre} | {movie.Rating}
          <button onClick={() => removeMovie(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
