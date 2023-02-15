import React from "react";
import Pagination from "react-bootstrap/Pagination";

const Paginations = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination className="d-flex justify-content-center">
      <Pagination.Prev
        disabled={currentPage === 1}
        onClick={() => paginate(currentPage - 1)}
      />
      {pageNumbers.map((number) => (
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => paginate(number)}
        >
          {number}
        </Pagination.Item>
      ))}
      <Pagination.Next
        disabled={currentPage === pageNumbers[pageNumbers.length - 1]}
        onClick={() => paginate(currentPage + 1)}
      />
    </Pagination>
  );
};

export default Paginations;

