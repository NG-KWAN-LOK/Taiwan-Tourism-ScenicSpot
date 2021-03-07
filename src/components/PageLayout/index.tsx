import React from "react";
import styles from "./style.module.scss";

const PageLayout = ({
  title,
  isError,
  children,
}: {
  title: string;
  isError: boolean;
  children: React.ReactChild;
}) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>
        {children}
        {isError && "提取資料失敗"}
      </div>
    </div>
  );
};

export default PageLayout;
