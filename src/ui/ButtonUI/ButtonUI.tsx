import { HTMLAttributes } from "react";
import styles from "./ButtonUI.module.css";

type ButtonUIProps = {
  typeBtn: "results" | "finalize";
} & HTMLAttributes<HTMLButtonElement>;

function ButtonUI({ typeBtn, ...props }: ButtonUIProps) {
  return (
    <button className={`${styles[typeBtn]} ${styles.btn} btnFont`} {...props}>
      {typeBtn === "finalize" ? "Finalize" : "Results"}
    </button>
  );
}

export default ButtonUI;
