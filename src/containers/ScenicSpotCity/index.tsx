import { useLocation } from "react-router-dom";
import styles from "./style.module.scss";
const ScenicSpotCity = () => {
  const { pathname } = useLocation();
  const cityID = pathname.substring(pathname.lastIndexOf("/") + 1);
  return <div className={styles.pageContainer}>台灣景點一覽-{cityID}</div>;
};

export default ScenicSpotCity;
