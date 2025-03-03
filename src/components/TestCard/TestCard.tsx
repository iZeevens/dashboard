import styles from "./TestCard.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Type, Status, ISite } from "../../types/apiTypes";
import { getSitesById } from "../../api/api";
import ButtonUI from "../../ui/ButtonUI/ButtonUI";

type TestCardProps = {
  id: number;
  name: string;
  type: Type;
  status: Status;
  siteId: number;
};

function TestCard({ id, name, type, status, siteId }: TestCardProps) {
  const [site, setSite] = useState("");
  const navigate = useNavigate();
  const updatedStatus = status.charAt(0) + status.slice(1).toLowerCase();
  const path = updatedStatus === "Draft" ? "finalize" : "results";

  useEffect(() => {
    const fetchDataSitesById = async (id: number) => {
      const { data }: { data: ISite } = await getSitesById(id);
      const updatedUrl = data.url.replace(/^(https?:\/\/)?(www\.)?/, "");

      setSite(updatedUrl);
    };

    fetchDataSitesById(siteId);
  }, [siteId]);

  const handleClick = (testId: number) => {
    navigate(`/${path}/${testId}`);
  };

  return (
    <div className={styles.row} onClick={() => handleClick(id)}>
      <span className={`textStrong ${styles.name}`}>{name}</span>
      <span className={`textRegular ${styles.type}`}>{type}</span>
      <span
        className={`textStrong ${styles.status} ${
          styles[status.toLowerCase()]
        }`}
      >
        {updatedStatus}
      </span>
      <span className={`textRegular ${styles.site}`}>{site}</span>
      <ButtonUI typeBtn={path} />
    </div>
  );
}

export default TestCard;
