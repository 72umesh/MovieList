import "./MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { isFavourite, addtoFavourites, removeFromFavourites } =
    useMovieContext();

  const favourite = isFavourite(movie.id);

  function onFavouriteClick(e) {
    e.preventDefault();
    if (favourite) removeFromFavourites(movie.id);
    else addtoFavourites(movie);

    console.log(favourite);
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favourite-btn ${favourite ? "active" : ""}`}
            onClick={onFavouriteClick}
          >
            {favourite ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
        <p>Rating: {movie.vote_average.toFixed(1)}</p>
      </div>
    </div>
  );
}

export default MovieCard;
