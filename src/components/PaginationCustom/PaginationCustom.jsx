import "./PaginationCustom.css";
import { getPageNumbers } from "../../commons/getPageNumbers";

const PaginationCustom = ({ currentPage, totalPages, onPageChange }) => {
  
  const handlePageClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="pagination-container">
      {/* Previous Button */}
      <button
        className="pagination-btn"
        onClick={handlePrev}
        disabled={currentPage === 1}
        aria-label="Previous"
      >
        &laquo;
      </button>

      {/* Page Numbers */}
      <div className="pagination-pages">
        {getPageNumbers(totalPages, currentPage).map((item, index) => {
          if (item === -1) {
            return (
              <span key={index} className="pagination-ellipsis">
                ...
              </span>
            );
          } else {
            return (
              <button
                key={index}
                className={`pagination-item ${item === currentPage ? "active" : ""}`}
                onClick={() => handlePageClick(item)}
                aria-current={item === currentPage ? "page" : undefined}
              >
                {item}
              </button>
            );
          }
        })}
      </div>

      {/* Next Button */}
      <button
        className="pagination-btn"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Next"
      >
        &raquo;
      </button>
    </div>
  );
};

export default PaginationCustom;