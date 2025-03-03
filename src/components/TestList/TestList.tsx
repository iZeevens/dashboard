import styles from "./TestList.module.css";
import { useState, useCallback } from "react";
import TestCard from "../TestCard/TestCard";
import TestHeader from "../TestHeader/TestHeader";
import TestNotFound from "../TestNotFound/TestNotFound";
import { ITest } from "../../types/apiTypes";
import { Columns } from "../../types/globalTypes";

type TestListProps = {
  filteredTests: ITest[];
  setFilteredTests: React.Dispatch<React.SetStateAction<ITest[]>>;
  tests: ITest[];
  setSearchQueary: React.Dispatch<React.SetStateAction<string>>;
};

const STATUS_ORDER = ["ONLINE", "PAUSED", "STOPPED", "DRAFT"];
const COLUMS: Columns = [
  { key: "name", label: "NAME" },
  { key: "type", label: "TYPE" },
  { key: "status", label: "STATUS" },
  { key: "siteId", label: "SITE" },
];

function TestList({
  filteredTests,
  setFilteredTests,
  tests,
  setSearchQueary,
}: TestListProps) {
  const [sortKey, setSortKey] = useState<string | null>(null);

  const handleSort = useCallback(
    (key: keyof ITest, isAscending: boolean) => {
      setFilteredTests((prevTests) => {
        const sorted = [...prevTests].sort((a, b) => {
          if (key === "status") {
            const order = isAscending
              ? STATUS_ORDER
              : [...STATUS_ORDER].reverse();
            return order.indexOf(a.status) - order.indexOf(b.status);
          }
          return isAscending
            ? String(a[key]).localeCompare(String(b[key]))
            : String(b[key]).localeCompare(String(a[key]));
        });

        return sorted;
      });
    },
    [setFilteredTests]
  );

  const resetResults = useCallback(() => {
    setFilteredTests(tests);
    setSortKey(null);
  }, [setFilteredTests, tests]);

  return (
    <div className={styles.container}>
      <TestHeader
        sortKey={sortKey}
        setSortKey={setSortKey}
        columns={COLUMS}
        onSort={handleSort}
      />

      {filteredTests.length > 0 ? (
        filteredTests.map((tests) => {
          const { id, name, type, status, siteId } = tests;

          return (
            <TestCard
              key={id}
              id={id}
              name={name}
              type={type}
              status={status}
              siteId={siteId}
            />
          );
        })
      ) : (
        <TestNotFound
          resetTests={resetResults}
          setSearchQueary={setSearchQueary}
        />
      )}
    </div>
  );
}

export default TestList;
