import State from "../../interface/store";
import { Actions } from "../../interface/store/actions";

const initialState: State["ScenicSpot"] = {
  scenicSpotList: [],
};

const ScenicSpotReducer = (
  state = initialState,
  action: Actions
): State["ScenicSpot"] => {
  switch (action.type) {
    case "SCENIC_SPOT/GET_SCENIC_SPOT_REQUEST":
      return {
        ...state,
      };
    case "SCENIC_SPOT/GET_SCENIC_SPOT_SUCCESS":
      return {
        ...state,
      };
    case "SCENIC_SPOT/GET_SCENIC_SPOT_FAIL":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default ScenicSpotReducer;
