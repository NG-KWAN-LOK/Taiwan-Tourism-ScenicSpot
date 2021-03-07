import React from "react";
import { IScenicSpot } from "../../interface";
import styles from "./style.module.scss";
interface LinkItemProps {
  data: IScenicSpot;
}

const LinkItem = ({ data }: LinkItemProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.name}>{data.Name}</div>
      <div className={styles.discription}>{data.DescriptionDetail}</div>
    </div>
  );
};

export default React.memo(LinkItem);
