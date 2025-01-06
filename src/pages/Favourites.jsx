import "./Favourites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favourites() {
  const { favourites } = useMovieContext();

  console.log(favourites);

  if (favourites && favourites.length > 0) {
    return (
      <div className="favourites">
        <h2>Your Favourites Movies</h2>
        <div className="movies-grid">
          {favourites.map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="favourites-empty">
      <h2>No Favourite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here!</p>
    </div>
  );
}

export default Favourites;
