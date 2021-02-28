import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./style.module.scss";

import CityItem from "../CityItem";

import { getCityScenicSpot } from "../../utils/api";

import { IScenicSpot } from "../../interface/index";
import { API_PAGE_LIMIT } from "../../utils/constants";

const ScenicSpotCity = () => {
  const { pathname } = useLocation();
  const cityName = pathname.substring(pathname.lastIndexOf("/") + 1);
  const [scenicSpotList, setScenicSpotList] = useState<IScenicSpot[]>([]);
  const [isAllFetched, setIsAllFetched] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getScenicSpotData = useCallback((cityName: string, page: number) => {
    setIsLoading(true);
    getCityScenicSpot(cityName, page)
      .then((res) => {
        setScenicSpotList((cur) => [...cur, ...res.data]);
        setIsAllFetched(res.data.length < API_PAGE_LIMIT);
        console.log(res.data);
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
        getScenicSpotData(cityName, page);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isLoading, isAllFetched, scenicSpotList]);

  useEffect(() => {
    setIsAllFetched(false);
    setScenicSpotList([]);
    setIsLoading(false);
    getScenicSpotData(cityName, 0);
  }, [cityName]);
  return (
    <div className={styles.pageContainer}>
      <div className={styles.title}>台灣景點一覽-{cityName}</div>
      <div className={styles.content}>
        {scenicSpotList.map((scenicSpot) => {
          return <CityItem key={scenicSpot.ID} data={scenicSpot} />;
        })}
      </div>
    </div>
  );
};

export default ScenicSpotCity;
