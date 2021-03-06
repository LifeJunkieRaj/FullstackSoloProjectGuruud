import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import askAGuruReducer from "./ask_a_guru";
import commentReducer from "./comment";
import responseReducer from "./response";
import searchReducer from "./nav_bar";

const rootReducer = combineReducers({
  session: sessionReducer,
  questions: askAGuruReducer,
  comments: commentReducer,
  responses: responseReducer,
  found: searchReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;