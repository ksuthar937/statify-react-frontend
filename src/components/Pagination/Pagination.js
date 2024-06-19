import React, { useEffect, useState } from "react";

import styles from "./Pagination.module.css";
import axios from "axios";
import { API_URL } from "../../config";

const Pagination = ({
  month,
  page,
  handlePrevPage,
  handleNextPage,
  perPage,
  handlePerPage,
}) => {
  // For working of next and previous buttons calculated derive state

  const [itemsCount, setItemsCount] = useState(0);

  const possiblePage = Math.ceil(itemsCount / perPage);

  useEffect(() => {
    fetchTransactions(month);
  }, [month]);

  const fetchTransactions = async (month) => {
    try {
      const response = await axios(`${API_URL}/transactions?month=${month}`);
      setItemsCount(response.data.transactions.length);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <p>Page No: {page}</p>
      <div className={styles.btn}>
        <button onClick={handlePrevPage} disabled={page <= 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={page === possiblePage}>
          Next
        </button>
      </div>
      <p>
        Per Page:{" "}
        <select
          className={styles.perpage}
          value={perPage}
          onChange={(e) => handlePerPage(e.target.value)}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select>
      </p>
    </div>
  );
};

export default Pagination;
