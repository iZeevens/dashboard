import styles from "./SearchInput.module.css";
import { memo } from "react";

type SearchInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  testCount: number;
};

function SearchInput({ value, onChange, testCount }: SearchInputProps) {
  return (
    <div className={styles.container}>
      <img src="/search-icon.svg" className={styles.icon} />
      <input
        type="text"
        placeholder="What test are you looking for?"
        className={`${styles.input} textRegular`}
        value={value}
        onChange={onChange}
      />
      <span className={`${styles.count} textRegular`}>{testCount} tests</span>
    </div>
  );
}

export default memo(SearchInput);
