import { combineReducers } from "redux";

import themeSlice from "./themeSlice";
import drawerWidth from "./drawerWidth.jsx";
const rootReducer = combineReducers({
   themeReducer: themeSlice.reducer,
   widthReducer: drawerWidth.reducer,
})

export default rootReducer