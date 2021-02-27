import React from "react";
import styles from "./style.module.scss";
interface HeaderProps {
  setMobileNavOn: () => void;
}
const Header = ({ setMobileNavOn }: HeaderProps) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.header_siteTitle}>臺灣觀光景點網站</div>
        <div className={styles.header_mainnavButtom} onClick={setMobileNavOn}>
          <button className={styles.hamburger}></button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
