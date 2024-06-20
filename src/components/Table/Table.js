import React, { useEffect, useState } from "react";
import axios from "axios";

import { API_URL } from "../../config";

import styles from "./Table.module.css";
import Loader from "../Loader/Loader";

const Table = ({ month, search, page, perPage }) => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchTransactions(month, search, page, perPage);
  }, [month, search, page, perPage]);

  const fetchTransactions = async (month, search, page, perPage) => {
    setIsLoading(true);
    try {
      const response = await axios(
        `${API_URL}/transactions?month=${month}&search=${search}&perPage=${perPage}&pageNo=${page}`
      );
      setIsLoading(false);
      setTransactions(response.data.transactions);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <table className={styles.wrapper}>
            <thead>
              <tr>
                <th className={styles.id}>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th className={styles.price}>Price</th>
                <th>Category</th>
                <th className={styles.sold}>Sold</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction._id}>
                  <td className={styles.id}>{transaction.id}</td>
                  <td>
                    <span className={styles.cell}>{transaction.title}</span>
                  </td>
                  <td>
                    <span className={styles.cell}>
                      {transaction.description}
                    </span>
                  </td>
                  <td className={styles.price}>
                    {transaction.price.toFixed(0)}
                  </td>
                  <td>
                    <span className={styles.cell}>{transaction.category}</span>
                  </td>
                  <td className={styles.sold}>
                    {transaction.sold ? "Yes" : "No"}
                  </td>
                  <td>
                    <img
                      src={transaction.image}
                      alt="Rain Jacket Women Windbreaker Striped Climbing Raincoats"
                      width={32}
                      height={32}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default Table;
