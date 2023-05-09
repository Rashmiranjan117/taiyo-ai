import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import { reducer as ChartReducer } from "./ChartReducer/reducer";
import { reducer as ContactReducer } from "./ContactReducer/reducer";

const rootReducer = combineReducers({ ChartReducer, ContactReducer });

const store = legacy_createStore(rootReducer, compose(applyMiddleware(thunk)));

export { store };
