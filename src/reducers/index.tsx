import { combineReducers } from "redux";
import counter from "./counter";
import todos
 from "./tods";
const rootReducer = combineReducers({
  counter,
  todos
})

export default rootReducer;