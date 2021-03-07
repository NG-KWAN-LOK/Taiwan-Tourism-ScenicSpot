import { useSelector } from "../../store";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import useScrollHitBottom from "../../hooks/useScrollHitBottom";

import PageLayout from "../../components/PageLayout";
import CityItem from "../../components/CityItem";
import { CityList } from "../../utils/constants";

import { getScenicSpotCity } from "./action";
import { useCallback, useEffect, useMemo } from "react";

const ScenicSpotCity = () => {
  const { pathname } = useLocation();
  const cityIdFromPathName = pathname.substring(pathname.lastIndexOf("/") + 1);

  const dispatch = useDispatch();
  const {
    cityId,
    isError,
    isAllFetched,
    isLoading,
    scenicSpotList,
  } = useSelector((state) => state.ScenicSpotCity);

  const fetchData = useCallback(() => {
    dispatch(getScenicSpotCity(cityIdFromPathName));
  }, [cityIdFromPathName]);

  useScrollHitBottom(fetchData, isLoading || isAllFetched || isError);

  const cityName = useMemo(
    () => CityList.find((city) => city.id === cityIdFromPathName)?.name,
    [cityIdFromPathName]
  );

  useEffect(() => {
    if (!scenicSpotList.length || cityIdFromPathName != cityId) {
      fetchData();
    }
  }, [cityIdFromPathName]);
  return (
    <PageLayout title={`台灣景點一覽-${cityName}`} isError={isError}>
      <>
        {cityIdFromPathName === cityId &&
          scenicSpotList.map((scenicSpot) => {
            return <CityItem key={scenicSpot.ID} data={scenicSpot} />;
          })}
      </>
    </PageLayout>
  );
};

export default ScenicSpotCity;
