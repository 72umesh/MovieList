import { useState } from "react";
import "./Pagination.css";

function Pagination({ onPageChange }) {
  const [page, setPage] = useState(1);

  function handleNextPage() {
    setPage((nextPage) => {
      const newPage = nextPage + 1;
      onPageChange(newPage);
      return newPage;
    });

    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  }

  function handlePreviousPage() {
    setPage((prevPage) => {
      const newPage = Math.max(prevPage - 1, 1);
      onPageChange(newPage);
      return newPage;
    });

    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  }
  return (
    <div className="pagination">
      <button onClick={handlePreviousPage} className="previouspage">
        Previous Page
      </button>
      <h3>Page {page}</h3>
      <button onClick={handleNextPage} className="nextpage">
        Next Page
      </button>
    </div>
  );
}

export default Pagination;
