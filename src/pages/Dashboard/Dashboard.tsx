import styles from "./Dashboard.module.css";
import { useEffect, useState } from "react";
import { getSites } from "../../api/api";
import { ITest } from "../../types/apiTypes";
import SearchInput from "../../components/SearchInput/SearchInput";
import TestList from "../../components/TestList/TestList";

function Dashborard() {
  const [data, setData] = useState<ITest[]>([]);

  useEffect(() => {
    const fetchDataSites = async () => {
      const { data } = await getSites();

      setData(data)
    };

    fetchDataSites()
  }, []);

  return (
    <div>
      <h1 className={`headingLg, ${styles.title}`}>Dashboard</h1>

      {/* <SearchInput testCount={7}/> */}
      <TestList />
    </div>
  );
}

export default Dashborard;
