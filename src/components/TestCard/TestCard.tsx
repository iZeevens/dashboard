import styles from "./TestCard.module.css";
import ButtonUI from "../../ui/ButtonUI/ButtonUI";

function TestCard() {
  return (
    <div className={styles.row}>
      <span className="textStrong">Order basket redesing</span>
      <span className="textRegular">Classic</span>
      <span className={`textStrong ${styles.status}`}>Online</span>
      <span className="textRegular">market.company.com</span>
      <ButtonUI typeBtn="finalize" />
    </div>
  );
}

export default TestCard;
