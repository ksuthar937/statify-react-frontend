import React, { useEffect, useState } from "react";

import styles from "./Stats.module.css";
import { API_URL } from "../../config";
import axios from "axios";

const Stats = ({ month }) => {
  const [stats, setStats] = useState({
    totalSale: 0,
    totalSoldItem: 0,
    totalUnSoldItem: 0,
  });

  useEffect(() => {
    fetchStats(month);
  }, [month]);

  const fetchStats = async (month) => {
    try {
      const response = await axios(`${API_URL}/statistics?month=${month}`);
      setStats(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1>Statistics - {month}</h1>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>Total Sale Amount</td>
            <th>{stats.totalSale.toFixed(0)}</th>
          </tr>
          <tr>
            <td>Total Sold Item</td>
            <th>{stats.totalSoldItem}</th>
          </tr>
          <tr>
            <td>Total Unsold Item</td>
            <th>{stats.totalUnSoldItem}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Stats;
