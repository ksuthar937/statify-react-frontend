import React, { useEffect, useState } from "react";
import axios from "axios";

import { API_URL } from "../../config";

import styles from "./Table.module.css";

const Table = ({ month, search, page, perPage, handleCount }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions(month, search, page, perPage);
  }, [month, search, page, perPage]);

  const fetchTransactions = async (month, search, page, perPage) => {
    try {
      const response = await axios(
        `${API_URL}/transactions?month=${month}&search=${search}&perPage=${perPage}&pageNo=${page}`
      );
      setTransactions(response.data.transactions);
      handleCount(response.data.transactions.length);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <table className={styles.wrapper}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Category</th>
          <th>Sold</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction._id}>
            <td>{transaction.id}</td>
            <td>
              <span>{transaction.title}</span>
            </td>
            <td>
              <span>{transaction.description}</span>
            </td>
            <td>{transaction.price.toFixed(0)}</td>
            <td>
              <span>{transaction.category}</span>
            </td>
            <td>{transaction.sold ? "Yes" : "No"}</td>
            <td>
              <img
                src={transaction.image}
                alt="Rain Jacket Women Windbreaker Striped Climbing Raincoats"
                width={30}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
