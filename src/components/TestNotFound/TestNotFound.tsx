import styles from "./TestNotFound.module.css";
import ButtonUI from "../../ui/ButtonUI/ButtonUI";
import { memo } from "react";

type TestNotFoundProps = {
  setSearchQueary: React.Dispatch<React.SetStateAction<string>>;
  resetTests: () => void;
};

function TestNotFound({ setSearchQueary, resetTests }: TestNotFoundProps) {
  const handleClick = () => {
    setSearchQueary("");
    resetTests();
  };

  return (
    <div className={styles.container}>
      <span className={styles.text}>
        Your search did not match any results.
      </span>
      <ButtonUI typeBtn="reset" onClick={handleClick} />
    </div>
  );
}

export default memo(TestNotFound);
