import { Pagination } from "react-bootstrap";
export const TablePagination = (props) => {
  const itemsPerPage = 10;
  const { data, currentPageState } = props;
  const [currentPage, setCurrentPage] = currentPageState;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <Pagination>
        <Pagination.Prev onClick={prevPage} disabled={currentPage === 1} />
        {pageNumbers.map((number) => (
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={nextPage}
          disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
        />
      </Pagination>

      <style>{`
        .pagination a {
          color: #6d28d9 !important;
        }

        .pagination .active a {
          background-color: #6d28d9 !important;
          border-color: #6d28d9 !important;
        }

        .active>.page-link, .page-link.active {
            background-color: #6d28d9 !important;
            border-color: #6d28d9 !important;
        }
    

        .pagination .disabled a {
          color: gray !important;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};
