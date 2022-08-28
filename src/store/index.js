import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import campusReducer from "./reducers/campusReducer";
import studentReducer from "./reducers/studentReducer";

const rootReducer = combineReducers({
  campus: campusReducer,
  student: studentReducer,
});

function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;
