import styles from "./Dashboard.module.css";
import { useState, useEffect, useCallback } from "react";
import { getTests } from "../../api/api";
import { ITest } from "../../types/apiTypes";
import SearchInput from "../../components/SearchInput/SearchInput";
import TestList from "../../components/TestList/TestList";

function Dashborard() {
  const [tests, setTests] = useState<ITest[]>([]);
  const [filteredTests, setFilteredTests] = useState<ITest[]>([]);
  const [searchQueary, setSearchQueary] = useState("");

  useEffect(() => {
    const fetchDataTests = async () => {
      const { data } = await getTests();

      setTests(data);
      setFilteredTests(data);
    };

    fetchDataTests();
  }, []);

  useEffect(() => {
    setFilteredTests(
      tests.filter((test) =>
        test.name.toLowerCase().includes(searchQueary.toLowerCase())
      )
    );
  }, [searchQueary, tests]);

  const handleChangeSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchQueary(value)
  }, []);

  return (
    <div>
      <h1 className={`headingLg, ${styles.title}`}>Dashboard</h1>

      <SearchInput
        testCount={tests.length}
        value={searchQueary}
        onChange={handleChangeSearch}
      />
      <TestList
        filteredTests={filteredTests}
        setFilteredTests={setFilteredTests}
        tests={tests}
        setSearchQueary={setSearchQueary}
      />
    </div>
  );
}

export default Dashborard;
