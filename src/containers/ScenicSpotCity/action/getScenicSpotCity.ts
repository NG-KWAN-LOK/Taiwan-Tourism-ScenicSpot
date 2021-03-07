import { ThunkResult } from "../../../interface/store/actions";

export const GET_SCENIC_SPOT_CITY_REQUEST =
  "SCENIC_SPOT/GET_SCENIC_SPOT_CITY_REQUEST";
export const GET_SCENIC_SPOT_CITY_SUCCESS =
  "SCENIC_SPOT/GET_SCENIC_SPOT_CITY_SUCCESS";
export const GET_SCENIC_SPOT_CITY_FAIL =
  "SCENIC_SPOT/GET_SCENIC_SPOT_CITY_FAIL";

interface getScenicSpotCityRequest {
  type: typeof GET_SCENIC_SPOT_CITY_REQUEST;
}
interface getScenicSpotCitySuccess {
  type: typeof GET_SCENIC_SPOT_CITY_SUCCESS;
}
interface getScenicSpotCityFail {
  type: typeof GET_SCENIC_SPOT_CITY_FAIL;
}

const getScenicSpotCityRequest = (): getScenicSpotCityRequest => ({
  type: GET_SCENIC_SPOT_CITY_REQUEST,
});
const getScenicSpotCitySuccess = (): getScenicSpotCitySuccess => ({
  type: GET_SCENIC_SPOT_CITY_SUCCESS,
});
const getScenicSpotCityFail = (): getScenicSpotCityFail => ({
  type: GET_SCENIC_SPOT_CITY_FAIL,
});

export type getScenicSpotCityType =
  | getScenicSpotCityRequest
  | getScenicSpotCitySuccess
  | getScenicSpotCityFail;

export type getScenicSpotCityActionType =
  | typeof GET_SCENIC_SPOT_CITY_REQUEST
  | typeof GET_SCENIC_SPOT_CITY_SUCCESS
  | typeof GET_SCENIC_SPOT_CITY_FAIL;

const getScenicSpotCity = (): ThunkResult<void> => async (
  dispatch,
  getState
) => {};

export default getScenicSpotCity;
