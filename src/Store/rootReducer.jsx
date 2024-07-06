import { combineReducers } from "redux";
import themeSlice from "./themeSlice";
import drawerWidth from "./drawerWidth.jsx";
import userSlice from "./userSlice.jsx";

const rootReducer = combineReducers({
   themeReducer: themeSlice.reducer,
   widthReducer: drawerWidth.reducer,
   userReduce: userSlice.reducer,
})

export default rootReducer