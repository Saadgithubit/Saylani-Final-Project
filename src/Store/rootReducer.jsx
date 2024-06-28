import { combineReducers } from "redux";

import themeSlice from "./themeSlice";
import colorSlice from "./colorSlicejsx";
const rootReducer = combineReducers({
   themeReducer: themeSlice.reducer,
   colorReducer: colorSlice.reducer,
})

export default rootReducer