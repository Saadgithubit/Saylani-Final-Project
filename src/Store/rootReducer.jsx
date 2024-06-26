import { combineReducers } from "redux";

import themeSlice from "./themeSlice";
const rootReducer = combineReducers({
   themeReducer: themeSlice.reducer,
})

export default rootReducer