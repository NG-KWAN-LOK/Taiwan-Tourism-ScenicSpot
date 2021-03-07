import { useSelector } from "../../store";
import { useDispatch } from "react-redux";

import useScrollHitBottom from "../../hooks/useScrollHitBottom";

import PageLayout from "../../components/PageLayout";
import CityItem from "../../components/CityItem";

import { getScenicSpot } from "./action";
import { useCallback, useEffect } from "react";

const ScenicSpot = () => {
  const dispatch = useDispatch();
  const { isError, isAllFetched, isLoading, scenicSpotList } = useSelector(
    (state) => state.ScenicSpot
  );

  const fetchData = useCallback(() => {
    dispatch(getScenicSpot());
  }, []);

  useScrollHitBottom(fetchData, isLoading || isAllFetched || isError);

  useEffect(() => {
    if (!scenicSpotList.length) {
      fetchData();
    }
  }, []);

  return (
    <PageLayout title={"台灣景點一覽"} isError={isError}>
      <>
        {scenicSpotList.map((scenicSpot) => {
          return <CityItem key={scenicSpot.ID} data={scenicSpot} />;
        })}
      </>
    </PageLayout>
  );
};

export default ScenicSpot;
