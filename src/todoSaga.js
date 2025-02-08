import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosFailure,
  addTodoRequest,
  addTodoSuccess,
  deleteTodoRequest,
  deleteTodoSuccess,
  toggleTodoRequest,
  toggleTodoSuccess,
  editTodoRequest,
  editTodoSuccess,
  clearTodosRequest,
  clearTodosSuccess,
} from "./todoSlice";

const fakeApi = {
  fetchTodos: () => Promise.resolve([{ id: 1, text: "Перше завдання", completed: false }]),
  addTodo: (todo) => Promise.resolve(todo),
  deleteTodo: (id) => Promise.resolve(id),
  toggleTodo: (id) => Promise.resolve(id),
  editTodo: (todo) => Promise.resolve(todo),
  clearTodos: () => Promise.resolve([]),
};

function* fetchTodosSaga() {
  try {
    const data = yield call(fakeApi.fetchTodos);
    yield put(fetchTodosSuccess(data));
  } catch (error) {
    yield put(fetchTodosFailure(error.message));
  }
}

function* addTodoSaga(action) {
  const newTodo = { id: Date.now(), text: action.payload, completed: false };
  const result = yield call(fakeApi.addTodo, newTodo);
  yield put(addTodoSuccess(result));
}

function* deleteTodoSaga(action) {
  yield call(fakeApi.deleteTodo, action.payload);
  yield put(deleteTodoSuccess(action.payload));
}

function* toggleTodoSaga(action) {
  yield call(fakeApi.toggleTodo, action.payload);
  yield put(toggleTodoSuccess(action.payload));
}

function* editTodoSaga(action) {
  yield call(fakeApi.editTodo, action.payload);
  yield put(editTodoSuccess(action.payload));
}

function* clearTodosSaga() {
  yield call(fakeApi.clearTodos);
  yield put(clearTodosSuccess());
}

function* todoSaga() {
  yield takeLatest(fetchTodosRequest.type, fetchTodosSaga);
  yield takeLatest(addTodoRequest.type, addTodoSaga);
  yield takeLatest(deleteTodoRequest.type, deleteTodoSaga);
  yield takeLatest(toggleTodoRequest.type, toggleTodoSaga);
  yield takeLatest(editTodoRequest.type, editTodoSaga);
  yield takeLatest(clearTodosRequest.type, clearTodosSaga);
}

export default todoSaga;

