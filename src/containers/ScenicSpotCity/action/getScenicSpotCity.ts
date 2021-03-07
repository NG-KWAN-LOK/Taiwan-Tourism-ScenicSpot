import axios, { CancelTokenSource } from "axios";
import { IScenicSpot } from "../../../interface";
import { ThunkResult } from "../../../interface/store/actions";
import * as api from "../../../utils/api";
import { API_PAGE_LIMIT } from "../../../utils/constants";

export const GET_SCENIC_SPOT_CITY_REQUEST =
  "SCENIC_SPOT_CITY/GET_SCENIC_SPOT_CITY_REQUEST";
export const GET_SCENIC_SPOT_CITY_SUCCESS =
  "SCENIC_SPOT_CITY/GET_SCENIC_SPOT_CITY_SUCCESS";
export const GET_SCENIC_SPOT_CITY_FAIL =
  "SCENIC_SPOT_CITY/GET_SCENIC_SPOT_CITY_FAIL";

interface GetScenicSpotCityRequest {
  type: typeof GET_SCENIC_SPOT_CITY_REQUEST;
  payload: {
    cityId: string;
  };
}
interface GetScenicSpotCitySuccess {
  type: typeof GET_SCENIC_SPOT_CITY_SUCCESS;
  payload: {
    data: IScenicSpot[];
    isAllFetched: boolean;
  };
}
interface GetScenicSpotCityFail {
  type: typeof GET_SCENIC_SPOT_CITY_FAIL;
}

const getScenicSpotCityRequest = (
  cityId: string
): GetScenicSpotCityRequest => ({
  type: GET_SCENIC_SPOT_CITY_REQUEST,
  payload: {
    cityId,
  },
});
const getScenicSpotCitySuccess = (
  data: IScenicSpot[],
  isAllFetched: boolean
): GetScenicSpotCitySuccess => ({
  type: GET_SCENIC_SPOT_CITY_SUCCESS,
  payload: {
    data,
    isAllFetched,
  },
});
const getScenicSpotCityFail = (): GetScenicSpotCityFail => ({
  type: GET_SCENIC_SPOT_CITY_FAIL,
});

export type getScenicSpotCityType =
  | GetScenicSpotCityRequest
  | GetScenicSpotCitySuccess
  | GetScenicSpotCityFail;

export type getScenicSpotCityActionType =
  | typeof GET_SCENIC_SPOT_CITY_REQUEST
  | typeof GET_SCENIC_SPOT_CITY_SUCCESS
  | typeof GET_SCENIC_SPOT_CITY_FAIL;

let cancelTokenSource: CancelTokenSource | null = null;

const getScenicSpotCity = (newCityId: string): ThunkResult<void> => async (
  dispatch,
  getState
) => {
  if (cancelTokenSource) cancelTokenSource.cancel();
  const CancelToken = axios.CancelToken;
  cancelTokenSource = CancelToken.source();

  dispatch(getScenicSpotCityRequest(newCityId));
  const { scenicSpotList } = getState().ScenicSpotCity;
  const page = Math.floor(scenicSpotList.length / API_PAGE_LIMIT);
  try {
    const res: { data: IScenicSpot[] } = await api.getCityScenicSpot(
      newCityId,
      page,
      cancelTokenSource.token
    );
    cancelTokenSource = null;
    const isAllFetched = res.data.length < API_PAGE_LIMIT;
    dispatch(getScenicSpotCitySuccess(res.data, isAllFetched));
  } catch (err) {
    if (!axios.isCancel(err)) dispatch(getScenicSpotCityFail());
  }
};

export default getScenicSpotCity;
