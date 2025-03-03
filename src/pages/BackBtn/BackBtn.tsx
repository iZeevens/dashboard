import styles from "./BackBtn.module.css";
import { useNavigate } from "react-router";

function BackBtn() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <img src="/back-chevron.svg" className={styles.img}/>
      <span className={styles.text}>Back</span>
    </div>
  )
}

export default BackBtn;
