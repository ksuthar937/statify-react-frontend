import React from "react";

import styles from "./Stats.module.css";

const Stats = ({ month }) => {
  return (
    <div className={styles.wrapper}>
      <h1>Statistics - {month}</h1>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>Total Sale</td>
            <td>100000</td>
          </tr>
          <tr>
            <td>Total Sold Item</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Total Unsold Item</td>
            <td>15</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Stats;
