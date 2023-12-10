import { createStore, combineReducers, applyMiddleware } from "redux";
import { takeEvery, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("FETCH_MOVIES", fetchAllMovies);
  yield takeLatest("GET_DETAILS", setDetailsPage);
  yield takeLatest("GET_GENRES", getGenres);
}

function* fetchAllMovies() {
  try {
    // Get the movies:
    const moviesResponse = yield axios.get("/api/movies");
    // Set the value of the movies reducer:
    yield put({
      type: "SET_MOVIES",
      payload: moviesResponse.data,
    });
  } catch (error) {
    console.log("fetchAllMovies error:", error);
  }
}

// Gets the information for the details page
function* setDetailsPage(action) {
  try {
    const results = yield axios.get(`/api/details/${action.payload}`);
    yield put({ type: "SET_DETAILS", payload: results.data[0] });
  } catch {
    console.log("Error with details get");
  }
}

function* getGenres(action) {
  try {
    const genres = yield axios.get(`/api/genres/${action.payload}`);
    console.log("looking genre data", genres.data);
    yield put({ type: "SET_GENRES", payload: genres.data });
  } catch {
    console.log("Error with genres");
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};

// reducer for current details
const details = (state = {}, action) => {
  switch (action.type) {
    case "SET_DETAILS":
      return action.payload;
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    details,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;
