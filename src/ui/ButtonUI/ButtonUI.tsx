import { HTMLAttributes, memo } from "react";
import styles from "./ButtonUI.module.css";

type ButtonUIProps = {
  typeBtn: "results" | "finalize" | "reset";
} & HTMLAttributes<HTMLButtonElement>;

function ButtonUI({ typeBtn, ...props }: ButtonUIProps) {
  const text = typeBtn.charAt(0).toUpperCase() + typeBtn.slice(1);

  return (
    <button className={`${styles[typeBtn]} ${styles.btn} btnFont`} {...props}>
      {text}
    </button>
  );
}

export default memo(ButtonUI);
