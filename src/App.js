import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTodosRequest,
  addTodoRequest,
  deleteTodoRequest,
  toggleTodoRequest,
  editTodoRequest,
  clearTodosRequest,
} from "./todoSlice";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.todos);

  return (
    <div class="app">
      <h1>Redux-Saga TODO</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Нове завдання" />

      <button onClick={() => dispatch(fetchTodosRequest())}>Завантажити</button>
      <button onClick={() => dispatch(addTodoRequest(text))}>Додати</button>
      <button onClick={() => dispatch(clearTodosRequest())}>Очистити</button>

      {loading && <p>Завантаження...</p>}
      <ul>
        {items.map((todo) => (
          <li key={todo.id}>
            <span onClick={() => dispatch(toggleTodoRequest(todo.id))}>
              {todo.completed ? "✅" : "⭕"} {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodoRequest(todo.id))}>❌</button>
            <button onClick={() => dispatch(editTodoRequest({ id: todo.id, text: "Новий текст" }))}>
              ✏️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


