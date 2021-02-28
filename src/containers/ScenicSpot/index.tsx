import React, { useCallback, useEffect, useState } from "react";
import styles from "./style.module.scss";

import CityItem from "../CityItem";

import { getScenicSpot } from "../../utils/api";

import { IScenicSpot } from "../../interface/index";
import { API_PAGE_LIMIT } from "../../utils/constants";

const ScenicSpot = () => {
  const [scenicSpotList, setScenicSpotList] = useState<IScenicSpot[]>([]);
  const [isAllFetched, setIsAllFetched] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getScenicSpotData = useCallback((page: number) => {
    setIsLoading(true);
    getScenicSpot(page)
      .then((res) => {
        setScenicSpotList((cur) => [...cur, ...res.data]);
        setIsAllFetched(res.data.length < API_PAGE_LIMIT);
      })
      .catch((err) => {
        console.log("fail");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (isLoading || isAllFetched) return;
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
  }, [isLoading, isAllFetched, scenicSpotList]);

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
      </div>
    </div>
  );
};

export default ScenicSpot;
