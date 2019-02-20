import { combineReducers } from "redux";
import postReducer from "./postReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
  posts: postReducer,
  profile: profileReducer
});
