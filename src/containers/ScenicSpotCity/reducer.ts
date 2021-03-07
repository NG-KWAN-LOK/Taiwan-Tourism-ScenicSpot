import State from "../../interface/store";
import { Actions } from "../../interface/store/actions";

import {
  GET_SCENIC_SPOT_CITY_FAIL,
  GET_SCENIC_SPOT_CITY_REQUEST,
  GET_SCENIC_SPOT_CITY_SUCCESS,
} from "./action/getScenicSpotCity";

const initialState: State["ScenicSpotCity"] = {
  scenicSpotList: [],
};

const ScenicSpotCityReducer = (
  state = initialState,
  action: Actions
): State["ScenicSpotCity"] => {
  switch (action.type) {
    case GET_SCENIC_SPOT_CITY_SUCCESS:
    case GET_SCENIC_SPOT_CITY_REQUEST:
    case GET_SCENIC_SPOT_CITY_FAIL:
      return state;
    default:
      return state;
  }
};

export default ScenicSpotCityReducer;
