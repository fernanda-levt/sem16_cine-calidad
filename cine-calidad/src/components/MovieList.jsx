import { movies } from "../data/movies.js";
import MovieCard from "./MovieCard.jsx";

const MovieList = () => {
  return (
    <section className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
};

export default MovieList;
