import { IScenicSpot } from "..";

interface ScenicSpotCityState {
  scenicSpotList: IScenicSpot[];
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
