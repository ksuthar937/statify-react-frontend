import React from "react";

import styles from "./Pagination.module.css";

const Pagination = ({
  page,
  handlePage,
  perPage,
  handlePerPage,
  itemsCount,
}) => {
  //   const possiblePage = Math.floor(itemsCount / perPage);

  const handlePrevPage = () => {
    handlePage((prev) => prev--);
  };

  const handleNextPage = () => {
    handlePage((prev) => {
      console.log(prev);
      prev = prev + 1;
    });
  };

  return (
    <div className={styles.wrapper}>
      <p>Page No: {page}</p>
      <div className={styles.btn}>
        <button onClick={handlePrevPage}>Previous</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
      <p>Per Page: {perPage}</p>
    </div>
  );
};

export default Pagination;
