import thunk from "redux-thunk";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { createSelectorHook } from "react-redux";

import ScenicSpotReducer from "../containers/ScenicSpot/reducer";
import ScenicSpotCityReducer from "../containers/ScenicSpot/reducer";

import State from "../interface/store";

const store = createStore(
  combineReducers({ ScenicSpotReducer, ScenicSpotCityReducer }),
  applyMiddleware(thunk)
);

const useSelector = createSelectorHook<State>();

export default store;

export { useSelector };
