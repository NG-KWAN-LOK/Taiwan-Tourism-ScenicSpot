import thunk from "redux-thunk";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { createSelectorHook } from "react-redux";

import ScenicSpot from "../containers/ScenicSpot/reducer";
import ScenicSpotCity from "../containers/ScenicSpotCity/reducer";

import State from "../interface/store";

const store = createStore(
  combineReducers({ ScenicSpot, ScenicSpotCity }),
  applyMiddleware(thunk)
);

const useSelector = createSelectorHook<State>();

export default store;

export { useSelector };
