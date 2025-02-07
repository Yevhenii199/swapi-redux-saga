import { call, put, takeLatest } from "redux-saga/effects";
import { fetchSwapiSuccess, fetchSwapiFailure, fetchSwapiRequest } from "./swapiSlice";

const fetchSwapiApi = async (query) => {
  const response = await fetch(`https://swapi.dev/api/${query}/`);
  if (!response.ok) throw new Error("Не вдалося отримати дані");
  return await response.json();
};

function* fetchSwapiData(action) {
  try {
    const data = yield call(fetchSwapiApi, action.payload);
    yield put(fetchSwapiSuccess(data));
  } catch (error) {
    yield put(fetchSwapiFailure(error.message));
  }
}

function* swapiSaga() {
  yield takeLatest(fetchSwapiRequest.type, fetchSwapiData);
}

export default swapiSaga;
