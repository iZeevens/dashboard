import styles from "./TestList.module.css";
import TestCard from "../TestCard/TestCard";
import TestHeader from "../TestHeader/TestHeader";

function TestList() {
  return (
    <div className={styles.container}>
      <TestHeader />

      <TestCard />
    </div>
  );
}

export default TestList;
