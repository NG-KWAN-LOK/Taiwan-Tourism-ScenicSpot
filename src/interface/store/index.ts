import { IScenicSpot } from "..";

interface ScenicSpotCityState {
  scenicSpotList: IScenicSpot[];
}

interface ScenicSpotState {
  scenicSpotList: IScenicSpot[];
}

interface State {
  ScenicSpot: ScenicSpotState;
  ScenicSpotCity: ScenicSpotCityState;
}

export default State;
