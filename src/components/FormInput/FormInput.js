import React from "react";

import styles from "./FormInput.module.css";

const FormInput = () => {
  return (
    <div className={styles.wrapper}>
      <input type="text" placeholder="Search transaction" />
      <select>
        <option value="">Select Month</option>
        <option value="january">January</option>
        <option value="february">February</option>
        <option value="march">March</option>
        <option value="april">April</option>
        <option value="may">May</option>
        <option value="june">June</option>
        <option value="july">July</option>
        <option value="august">August</option>
        <option value="september">September</option>
        <option value="october">October</option>
        <option value="november">November</option>
        <option value="december">December</option>
      </select>
    </div>
  );
};

export default FormInput;
