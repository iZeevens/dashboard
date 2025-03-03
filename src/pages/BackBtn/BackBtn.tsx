import styles from "./BackBtn.module.css";
import { useNavigate } from "react-router";

function BackBtn() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      handleClick();
    }
  }

  return (
    <div className={styles.container} onClick={handleClick} onKeyDown={handleKeyDown} tabIndex={0} role="button">
      <img src="/back-chevron.svg" className={styles.img}/>
      <span className={styles.text}>Back</span>
    </div>
  )
}

export default BackBtn;
