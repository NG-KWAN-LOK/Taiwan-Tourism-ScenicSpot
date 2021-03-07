import State from "../../interface/store";
import { Actions } from "../../interface/store/actions";

const initialState: State["ScenicSpot"] = {
  scenicSpotList: [],
  isLoading: false,
  isError: false,
  isAllFetched: false,
};

const ScenicSpotReducer = (
  state = initialState,
  action: Actions
): State["ScenicSpot"] => {
  switch (action.type) {
    case "SCENIC_SPOT/GET_SCENIC_SPOT_REQUEST":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "SCENIC_SPOT/GET_SCENIC_SPOT_SUCCESS":
      const { data, isAllFetched } = action.payload;
      return {
        ...state,
        isLoading: false,
        isAllFetched: isAllFetched,
        scenicSpotList: state.scenicSpotList.concat(data),
      };
    case "SCENIC_SPOT/GET_SCENIC_SPOT_FAIL":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default ScenicSpotReducer;
