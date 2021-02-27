import React, { useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import styles from "./style.module.scss";

import { CityList } from "../../utils/constants";
import LinkItem from "./LinkItem";
import Header from "./Header";

const NavBar = () => {
  const { pathname } = useLocation();

  const currentPath = pathname.substring(pathname.lastIndexOf("/") + 1);

  const [isNavBarDisplay, setIsNavBarDisplay] = useState<boolean>(false);
  const navToggleOn = useCallback(() => setIsNavBarDisplay(true), []);
  const navToggleOff = useCallback(() => setIsNavBarDisplay(false), []);
  return (
    <nav className={styles.navContainer}>
      <div
        className={`${styles["navBar"]} ${
          isNavBarDisplay ? styles["navBar-open"] : styles["navBar-close"]
        }`}
      >
        <div className={styles.menuNavLayer}>
          <h1 className={styles.siteTitle}>臺灣觀光景點網站</h1>
          <div className={styles.menuNav}>
            <div className={styles.menuNav_item}>
              <div className={styles.menuNav_title}>MENU</div>
              <div className={styles.subMenuNav}>
                <LinkItem
                  name={"臺灣景點一覽"}
                  path={""}
                  setMobileNavOff={navToggleOff}
                  isActive={!currentPath}
                />
              </div>
            </div>
            <div className={styles.menuNav_item}>
              <div className={styles.menuNav_title}>查看縣市景點</div>
              <div className={styles.subMenuNav}>
                {CityList.map((city) => {
                  return (
                    <LinkItem
                      key={city.id}
                      name={city.name}
                      path={city.id}
                      setMobileNavOff={navToggleOff}
                      isActive={currentPath === city.id}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.background} onClick={navToggleOff}></div>
      </div>
      <Header setMobileNavOn={navToggleOn} />
    </nav>
  );
};

export default NavBar;
