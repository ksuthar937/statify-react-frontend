import styles from "./App.module.css";
import FormInput from "./components/FormInput/FormInput";
import Table from "./components/Table/Table";

function App() {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <h1>Statify</h1>
        </nav>
      </header>
      <FormInput />
      <Table />
    </>
  );
}

export default App;
