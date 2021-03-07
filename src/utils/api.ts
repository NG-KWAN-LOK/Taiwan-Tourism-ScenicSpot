import axios, { AxiosInstance, CancelToken } from "axios";
import { API_PAGE_LIMIT } from "./constants";

const instance: AxiosInstance = axios.create({
  baseURL: "https://ptx.transportdata.tw/MOTC/",
});

export const getScenicSpot = (page: number) => {
  return instance("/v2/Tourism/ScenicSpot/", {
    params: {
      $skip: page * API_PAGE_LIMIT,
      $top: API_PAGE_LIMIT,
      $format: "JSON",
    },
  });
};

export const getCityScenicSpot = (
  cityName: string,
  page: number,
  cancelToken: CancelToken
) => {
  return instance(`/v2/Tourism/ScenicSpot/${cityName}`, {
    params: {
      $skip: page * API_PAGE_LIMIT,
      $top: API_PAGE_LIMIT,
      $format: "JSON",
    },
    cancelToken,
  });
};
