import styles from "./Page.module.css";
import BackBtn from "../../pages/BackBtn/BackBtn";

type PageProps = {
  title: string;
  subTitle: string;
};

function Page({ title, subTitle }: PageProps) {
  return (
    <div className={styles.container}>
      <h2 className={`headingLg ${styles.title}`}>{title}</h2>
      <h3 className="headingMd">{subTitle}</h3>
      <BackBtn />
    </div>
  );
}

export default Page;
