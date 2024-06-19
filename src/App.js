import { useState } from "react";

import FormInput from "./components/FormInput/FormInput";
import Table from "./components/Table/Table";
import Pagination from "./components/Pagination/Pagination";
import Stats from "./components/Stats/Stats";
import Chart from "./components/Chart/Chart";

import styles from "./App.module.css";

function App() {
  const [month, setMonth] = useState("march");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(3);

  const handlePrevPage = () => {
    setPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <header className={styles.header}>
        <nav>
          <h1 className={styles.heading}>
            <span>📊</span>Statify
          </h1>
        </nav>
      </header>
      <section className={styles.transactions}>
        <h1>Transaction Dashboard</h1>
        <FormInput
          month={month}
          handleMonth={setMonth}
          search={query}
          handleSearch={setQuery}
        />
        <Table month={month} search={query} page={page} perPage={perPage} />
        <Pagination
          page={page}
          month={month}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          perPage={perPage}
          handlePerPage={setPerPage}
        />
      </section>
      <section className={styles.statistics}>
        <Stats month={month} />
        <Chart month={month} />
      </section>
    </>
  );
}

export default App;
