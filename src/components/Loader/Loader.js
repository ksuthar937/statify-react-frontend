import React from "react";
import { ThreeDots } from "react-loader-spinner";

import styles from "./Loadaer.module.css";

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <p>Data Fetching From Server...</p>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="var(--color-secondary1)"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
