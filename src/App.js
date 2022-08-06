import { Route, Routes } from "react-router-dom";

// Components
import { Listado } from "./components/Listado";
import { Login } from "./components/Login";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Detalle } from "./components/Detalle";
import { Resultado } from "./components/Resultado";

//Styles
// eslint-disable-next-line
import "./css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/listado" element={<Listado />} />
        <Route exact path="/detalle" element={<Detalle />} />
        <Route exact path="/resultado" element={<Resultado />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
