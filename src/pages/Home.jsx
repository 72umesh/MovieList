import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "./Home.css";
import Pagination from "../components/Pagination";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const populatMovies = await getPopularMovies(currentPage);
        setMovies(populatMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, [currentPage]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    try {
      const searchResults = await searchMovies(searchQuery);
      if (searchResults.length === 0) {
        setError("No Movies Found....");
      } else {
        setMovies(searchResults);
        setError(null);
      }
    } catch (err) {
      console.log(err);
      setError("Failed to search movies");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search For Movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading....</div>
      ) : (
        <div>
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

export default Home;
