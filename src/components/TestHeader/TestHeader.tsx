import styles from "./TestHeader.module.css";
import { useState, memo } from "react";
import { ITest } from "../../types/apiTypes";
import { Columns } from "../../types/globalTypes";

type TestHeaderProps = {
  columns: Columns;
  onSort: (key: keyof ITest, isAscending: boolean) => void;
  sortKey: string | null;
  setSortKey: React.Dispatch<React.SetStateAction<string | null>>
};

function TestHeader({ columns, onSort, sortKey, setSortKey }: TestHeaderProps) {
  const [isAscending, setIsAscending] = useState(true);

  const handleSort = (key: keyof ITest) => {
    const newAscending = key === sortKey ? !isAscending : false;
    
    setSortKey(key);
    setIsAscending(newAscending);
    onSort(key, newAscending);
  };

  return (
    <div className={styles.header}>
      {columns.map(({ key, label }) => (
        <span
          key={key}
          className={styles.itemName}
          onClick={() => handleSort(key)}
        >
          {label}
          {sortKey === key &&
            (isAscending ? (
              <img src="/up-chevron.svg" className={styles.chevron} />
            ) : (
              <img src="/down-chevron.svg" className={styles.chevron} />
            ))}
        </span>
      ))}
    </div>
  );
}

export default memo(TestHeader);
