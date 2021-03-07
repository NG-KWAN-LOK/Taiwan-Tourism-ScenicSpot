import { useCallback, useEffect, useState } from "react";
import styles from "./style.module.scss";

import CityItem from "../CityItem";

import { getScenicSpot } from "../../utils/api";

import { IScenicSpot } from "../../interface/index";
import { API_PAGE_LIMIT } from "../../utils/constants";

const ScenicSpot = () => {
  const [scenicSpotList, setScenicSpotList] = useState<IScenicSpot[]>([]);
  const [isAllFetched, setIsAllFetched] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const getScenicSpotData = useCallback((page: number) => {
    setIsLoading(true);
    getScenicSpot(page)
      .then((res) => {
        setScenicSpotList((cur) => [...cur, ...res.data]);
        setIsAllFetched(res.data.length < API_PAGE_LIMIT);
        setIsError(false);
      })
      .catch((err) => {
        console.log("fail");
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (isLoading || isAllFetched || isError) return;
    const page: number = Math.floor(scenicSpotList.length / API_PAGE_LIMIT);
    const onScroll = () => {
      if (
        window.innerHeight * 1.1 + window.scrollY >=
        document.documentElement.scrollHeight
      ) {
        getScenicSpotData(page);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isLoading, isAllFetched, scenicSpotList, isError, getScenicSpotData]);

  useEffect(() => {
    getScenicSpotData(0);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.title}>台灣景點一覽</div>
      <div className={styles.content}>
        {scenicSpotList.map((scenicSpot) => {
          return <CityItem key={scenicSpot.ID} data={scenicSpot} />;
        })}
        {isError && "提取資料失敗"}
      </div>
    </div>
  );
};

export default ScenicSpot;
