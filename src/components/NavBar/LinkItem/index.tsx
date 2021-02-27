import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
interface LinkItemProps {
  name: string;
  path: string;
  isActive: boolean;
  setMobileNavOff: () => void;
}

const LinkItem = ({ name, path, isActive, setMobileNavOff }: LinkItemProps) => {
  return (
    <Link
      to={`/scenicSpot/${path}`}
      className={`${isActive ? styles["subItem-active"] : styles.subItem}`}
      onClick={setMobileNavOff}
    >
      {name}
    </Link>
  );
};

export default React.memo(LinkItem);
