import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSwapiRequest, clearData } from "./swapiSlice";

function App() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.swapi);

  const handleRequest = () => {
    if (query.trim() !== "") dispatch(fetchSwapiRequest(query));
  };

  return (
    <div className="app">
      <h1>SWAPI Service</h1>
      <input
        type="text"
        placeholder="Введіть запит (наприклад, people/1)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleRequest} disabled={loading}>
        {loading ? "Завантаження..." : "Request"}
      </button>

      {error && <p className="error">Помилка: {error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}

      <footer>
        <button onClick={() => dispatch(clearData())}>Очистити</button>
      </footer>
    </div>
  );
}

export default App;
