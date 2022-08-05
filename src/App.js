import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Listado } from "./components/Listado";
import { Login } from "./components/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/listados" element={<Listado />} />
      </Routes>
    </div>
  );
}

export default App;
