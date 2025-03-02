import styles from "./TestHeader.module.css";

function TestHeader() {
  return (
    <div className={styles.header}>
      <span className={styles.itemName}>NAME</span>
      <span className={styles.itemName}>TYPE</span>
      <span className={styles.itemName}>STATUS</span>
      <span className={styles.itemName}>SITE</span>
    </div>
  );
}

export default TestHeader;
