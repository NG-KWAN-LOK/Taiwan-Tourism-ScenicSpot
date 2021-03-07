import { IScenicSpot } from "..";

interface ScenicSpotCityState {
  cityId: string;
  scenicSpotList: IScenicSpot[];
  isLoading: boolean;
  isError: boolean;
  isAllFetched: boolean;
}

interface ScenicSpotState {
  scenicSpotList: IScenicSpot[];
  isLoading: boolean;
  isError: boolean;
  isAllFetched: boolean;
}

interface State {
  ScenicSpot: ScenicSpotState;
  ScenicSpotCity: ScenicSpotCityState;
}

export default State;
