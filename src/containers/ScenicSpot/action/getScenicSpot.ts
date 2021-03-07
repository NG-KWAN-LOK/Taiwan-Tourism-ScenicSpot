import { IScenicSpot } from "../../../interface";
import { ThunkResult } from "../../../interface/store/actions";
import * as api from "../../../utils/api";
import { API_PAGE_LIMIT } from "../../../utils/constants";

export const GET_SCENIC_SPOT_REQUEST = "SCENIC_SPOT/GET_SCENIC_SPOT_REQUEST";
export const GET_SCENIC_SPOT_SUCCESS = "SCENIC_SPOT/GET_SCENIC_SPOT_SUCCESS";
export const GET_SCENIC_SPOT_FAIL = "SCENIC_SPOT/GET_SCENIC_SPOT_FAIL";

interface GetScenicSpotRequest {
  type: typeof GET_SCENIC_SPOT_REQUEST;
}
interface GetScenicSpotSuccess {
  type: typeof GET_SCENIC_SPOT_SUCCESS;
  payload: {
    data: IScenicSpot[];
    isAllFetched: boolean;
  };
}
interface GetScenicSpotFail {
  type: typeof GET_SCENIC_SPOT_FAIL;
}

const getScenicSpotRequest = (): GetScenicSpotRequest => ({
  type: GET_SCENIC_SPOT_REQUEST,
});
const getScenicSpotSuccess = (
  data: IScenicSpot[],
  isAllFetched: boolean
): GetScenicSpotSuccess => ({
  type: GET_SCENIC_SPOT_SUCCESS,
  payload: {
    data,
    isAllFetched,
  },
});
const getScenicSpotFail = (): GetScenicSpotFail => ({
  type: GET_SCENIC_SPOT_FAIL,
});

export type getScenicSpotActionType =
  | typeof GET_SCENIC_SPOT_REQUEST
  | typeof GET_SCENIC_SPOT_SUCCESS
  | typeof GET_SCENIC_SPOT_FAIL;

export type getScenicSpotType =
  | GetScenicSpotRequest
  | GetScenicSpotSuccess
  | GetScenicSpotFail;

const getScenicSpot = (): ThunkResult<void> => async (dispatch, getState) => {
  const { scenicSpotList } = getState().ScenicSpot;
  dispatch(getScenicSpotRequest());
  const page = Math.floor(scenicSpotList.length / API_PAGE_LIMIT);
  try {
    const res: { data: IScenicSpot[] } = await api.getScenicSpot(page);
    const isAllFetched = res.data.length < API_PAGE_LIMIT;
    dispatch(getScenicSpotSuccess(res.data, isAllFetched));
  } catch (err) {
    dispatch(getScenicSpotFail());
  }
};

export default getScenicSpot;
