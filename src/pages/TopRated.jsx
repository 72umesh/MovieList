import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import { getTopRated } from "../services/api";
import "./RatedUpcoming.css";
import Pagination from "../components/Pagination";

function TopRated() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const loadTopRatedMovies = async () => {
      try {
        const toprated = await getTopRated(currentPage);
        setMovies(toprated);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadTopRatedMovies();
  }, [currentPage]);

  return (
    <div className="toprated">
      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading....</div>
      ) : (
        <div>
          <h2>Top Rated Movies</h2>
          <div className="movies-grid">
            {movies.map((movie) => {
              return <MovieCard movie={movie} key={movie.id} />;
            })}
          </div>
          <Pagination onPageChange={handlePageChange} />
        </div>
      )}
    </div>
  );
}

export default TopRated;
