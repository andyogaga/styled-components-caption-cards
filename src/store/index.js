import { combineReducers } from "redux";
import tagReducer from "./reducers/tag.reducer";
import captionReducer from "./reducers/caption.reducer";


export default combineReducers({
  tags: tagReducer,
  captions: captionReducer
});