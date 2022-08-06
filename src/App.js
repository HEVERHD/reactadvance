import { Route, Routes } from "react-router-dom";

// Components
import { Listado } from "./components/Listado";
import { Login } from "./components/Login";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

//Styles
// eslint-disable-next-line
import "./css/bootstrap.min.css"




function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/listado" element={<Listado />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
