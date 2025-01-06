import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import { getUpcoming } from "../services/api";
import "./RatedUpcoming.css";
import Pagination from "../components/Pagination";

function Upcoming() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const loadUpcomingMovies = async () => {
      try {
        const upcoming = await getUpcoming(currentPage);
        setMovies(upcoming);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadUpcomingMovies();
  }, [currentPage]);

  return (
    <div className="upcoming">
      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading....</div>
      ) : (
        <div>
          <h2>Top Upcoming Movies</h2>
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
export default Upcoming;
