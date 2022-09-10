import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Detalle } from "../components/Detalle";
import { Favoritos } from "../components/Favoritos";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Listado } from "../components/Listado";
// import { Listado2 } from "../components/Listado2";
import { Login } from "../components/Login";
import { Resultado } from "../components/Resultado";
import { useCheckAuth } from "../hooks/useCheckAuth";

export const ListadoRoutes = () => {
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
    <>
      <Header favorite={favorite} />
      <div className="container">
        <Routes>
          <Route
            path="listado"
            element={<Listado addOrRemoveFavorite={addOrRemoveFavorite} />}
          />
          <Route exact={true} path="/detalle" element={<Detalle />} />
          <Route exact={true} path="/resultado" element={<Resultado />} />

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
        </Routes>
      </div>
      <Footer />
    </>
  );
};
