import { combineReducers } from "redux";

import { userReducer } from "./userReducer";
import { planReducer } from "./planReducer";
import { loggedReducer } from "./loggedReducer";
import { tableDataReducer } from "./tableDataReducer";

export const combineReducer = combineReducers({
  user: userReducer,
  plan: planReducer,
  loggedUserDetails: loggedReducer,
  table: tableDataReducer,
});
