import { ThunkResult } from "../../../interface/store/actions";

export const GET_SCENIC_SPOT_REQUEST = "SCENIC_SPOT/GET_SCENIC_SPOT_REQUEST";
export const GET_SCENIC_SPOT_SUCCESS = "SCENIC_SPOT/GET_SCENIC_SPOT_SUCCESS";
export const GET_SCENIC_SPOT_FAIL = "SCENIC_SPOT/GET_SCENIC_SPOT_FAIL";

interface GetScenicSpotRequest {
  type: typeof GET_SCENIC_SPOT_REQUEST;
}
interface GetScenicSpotSuccess {
  type: typeof GET_SCENIC_SPOT_SUCCESS;
}
interface GetScenicSpotFail {
  type: typeof GET_SCENIC_SPOT_FAIL;
}

const getScenicSpotRequest = (): GetScenicSpotRequest => ({
  type: GET_SCENIC_SPOT_REQUEST,
});
const getScenicSpotSuccess = (): GetScenicSpotSuccess => ({
  type: GET_SCENIC_SPOT_SUCCESS,
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

const getScenicSpot = (): ThunkResult<void> => async (dispatch, getState) => {};

export default getScenicSpot;
