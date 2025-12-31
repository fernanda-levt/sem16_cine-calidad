const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.imagen} alt={movie.titulo} />
      <div className="overlay">
        <h3>{movie.titulo}</h3>
        <p><strong>Género:</strong> {movie.genero}</p>
        <p>{movie.descripcion}</p>
      </div>
    </div>
  );
};

export default MovieCard;
