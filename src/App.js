import { useState } from "react";
import styles from "./App.module.css";
import FormInput from "./components/FormInput/FormInput";
import Table from "./components/Table/Table";
import Pagination from "./components/Pagination/Pagination";
import Stats from "./components/Stats/Stats";

function App() {
  const [month, setMonth] = useState("march");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(2);
  const [itemsCount, setItemsCount] = useState(0);

  return (
    <>
      <header className={styles.header}>
        <nav>
          <h1>Statify</h1>
        </nav>
      </header>
      <section className={styles.transactions}>
        <FormInput
          month={month}
          handleMonth={setMonth}
          search={query}
          handleSearch={setQuery}
        />
        <Table
          month={month}
          search={query}
          page={page}
          perPage={perPage}
          handleCount={setItemsCount}
        />
        <Pagination
          page={page}
          handlePage={setPage}
          perPage={perPage}
          handlePerPage={setPerPage}
          itemsCount={itemsCount}
        />
      </section>
      <section>
        <Stats month={month} />
      </section>
    </>
  );
}

export default App;
