import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import { Listado } from "./components/Listado";
import { Login } from "./components/Login";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Detalle } from "./components/Detalle";
import { Resultado } from "./components/Resultado";
import { Favoritos } from "./components/Favoritos";
import { Contacto } from "./components/Contacto";

//Styles
// eslint-disable-next-line
import "./css/bootstrap.min.css";
import "./css/app.css";
import { CheckingAuth } from "./components/CheckingAuth";
import { useCheckAuth } from "./hooks/useCheckAuth";

function App() {
  const [favorite, setFavorite] = useState([]);
  useEffect(() => {
    const favsInLocal = localStorage.getItem("favs");
    if (favsInLocal != null) {
      const favs = JSON.parse(favsInLocal);
      setFavorite(favs);
    }
  }, []);
  const status = useCheckAuth();

  if (status === "checking") {
    return <Login />;
  }

  const favMovies = localStorage.getItem("favs");

  let tempMovieList;

  if (favMovies === null) {
    tempMovieList = [];
  } else {
    tempMovieList = JSON.parse(favMovies);
  }

  // capturar elementos del DOM
  const addOrRemoveFavorite = (e) => {
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const title = parent.querySelector("h5").innerText;
    const img = parent.querySelector("img").src;
    const overview = parent.querySelector("p").innerText;
    const movieData = {
      title,
      img,
      overview,
      id: btn.dataset.movieId,
    };

    let movieArray = tempMovieList.find((movie) => movie.id === movieData.id);

    if (movieArray === undefined) {
      tempMovieList.push(movieData);
      localStorage.setItem("favs", JSON.stringify(tempMovieList));
      setFavorite(tempMovieList);
    } else {
      let movieLeft = tempMovieList.filter((oneMovie) => {
        return oneMovie.id !== movieData.id;
      });
      localStorage.setItem("favs", JSON.stringify(movieLeft));
      setFavorite(movieLeft);
    }
  };

  return (
    <div className="container">
      <Header favorite={favorite} />

      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route
          path="/listado"
          element={<Listado addOrRemoveFavorite={addOrRemoveFavorite} />}
        />

        <Route exact={true} path="/detalle" element={<Detalle />} />
        <Route
          exact={true}
          path="/favoritos"
          element={
            <Favoritos
              favorite={favorite}
              addOrRemoveFavorite={addOrRemoveFavorite}
            />
          }
        />
        <Route exact={true} path="/resultado" element={<Resultado />} />
        <Route exact={true} path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
