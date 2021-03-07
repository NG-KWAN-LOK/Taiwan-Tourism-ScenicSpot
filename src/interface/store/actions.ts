import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

import {
  ScenicSpotCityAction,
  ScenicSpotCityActionType,
} from "../../containers/ScenicSpotCity/action";
import {
  ScenicSpotAction,
  ScenicSpotActionType,
} from "../../containers/ScenicSpot/action";

import State from ".";

export type Actions = ScenicSpotAction | ScenicSpotCityAction;
type ActionsType = ScenicSpotActionType | ScenicSpotCityActionType;

export type ThunkResult<R> = ThunkAction<
  R,
  State,
  undefined,
  Action<ActionsType>
>;
