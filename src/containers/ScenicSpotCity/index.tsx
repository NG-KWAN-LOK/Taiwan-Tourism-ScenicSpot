import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import CityItem from "../../components/CityItem";
import PageLayout from "../../components/PageLayout";

import { getCityScenicSpot } from "../../utils/api";

import { IScenicSpot } from "../../interface/index";
import { API_PAGE_LIMIT, CityList } from "../../utils/constants";

const ScenicSpotCity = () => {
  const { pathname } = useLocation();
  const cityId = pathname.substring(pathname.lastIndexOf("/") + 1);
  const [scenicSpotList, setScenicSpotList] = useState<IScenicSpot[]>([]);
  const [isAllFetched, setIsAllFetched] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const getScenicSpotData = useCallback((cityId: string, page: number) => {
    setIsLoading(true);
    getCityScenicSpot(cityId, page)
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
        getScenicSpotData(cityId, page);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [
    isLoading,
    isAllFetched,
    scenicSpotList,
    isError,
    cityId,
    getScenicSpotData,
  ]);

  const cityName = useMemo(
    () => CityList.find((city) => city.id === cityId)?.name,
    [cityId]
  );

  useEffect(() => {
    setIsAllFetched(false);
    setScenicSpotList([]);
    setIsLoading(false);
    getScenicSpotData(cityId, 0);
    setIsError(!!cityName);
  }, [cityId]);
  return (
    <PageLayout title={`台灣景點一覽-${cityName}`} isError={isError}>
      <>
        {scenicSpotList.map((scenicSpot) => {
          return <CityItem key={scenicSpot.ID} data={scenicSpot} />;
        })}
      </>
    </PageLayout>
  );
};

export default ScenicSpotCity;
