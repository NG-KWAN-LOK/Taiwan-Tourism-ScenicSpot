import State from "../../interface/store";
import { Actions } from "../../interface/store/actions";
import { GET_SCENIC_SPOT_CITY_FAIL, GET_SCENIC_SPOT_CITY_REQUEST, GET_SCENIC_SPOT_CITY_SUCCESS } from "./action/getScenicSpotCity";

const initialState: State["ScenicSpotCity"] = {
  cityId: "",
  scenicSpotList: [],
  isLoading: false,
  isError: false,
  isAllFetched: false,
};

const ScenicSpotCityReducer = (
  state = initialState,
  action: Actions
): State["ScenicSpotCity"] => {
  switch (action.type) {
    case GET_SCENIC_SPOT_CITY_REQUEST:
      const { cityId } = action.payload;
      return {
        ...state,
        isLoading: true,
        isError: false,
        cityId: cityId,
        scenicSpotList: state.cityId === cityId ? state.scenicSpotList : [],
      };
    case GET_SCENIC_SPOT_CITY_SUCCESS:
      const { data, isAllFetched } = action.payload;
      return {
        ...state,
        isLoading: false,
        isAllFetched: isAllFetched,
        scenicSpotList: state.scenicSpotList.concat(data),
      };
    case GET_SCENIC_SPOT_CITY_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default ScenicSpotCityReducer;
