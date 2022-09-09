import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const Listado = (props) => {
  const [btnState, setBtnState] = useState(false);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const enPoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=eb42fd1735381027e43257fb869cd9ad&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
    axios
      .get(enPoint)
      .then((res) => {
        const apiData = res.data;
        setMovieList(apiData.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = () => {
    setBtnState((btnState) => !btnState);
    console.log({ classCheck });
  };

  let classCheck = btnState ? "active" : null;
  return (
    <>
      <div>
        <h1 className="text-center my-3 animate__animated animate__fadeInLeftBig">
          <b>Últimos estrenos del mes</b>
        </h1>
      </div>
      <div className="row ">
        {movieList.map((oneMovie, idx) => {
          return (
            <div
              className="card-group col-xs-12 col-sm-6 col-md-4 col-lg-3 animate__animated animate__pulse"
              key={idx}
            >
              <div className="card my-3">
                <h5 className="card-title text-center">
                  <b>{oneMovie.title.substring(0, 25)}...</b>
                </h5>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                  className=" img-rounded rounded float-left card-img-top img-thumbnail img-fluid animate__animated animate__flipInY"
                  alt="..."
                />
                <button
                  data-movie-id={oneMovie.id}
                  onClick={props.addOrRemoveFavorite}
                  className=" favorite-btn animate__animated animate__bounceIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={`bi ${classCheck}`}
                    viewBox="0 0 16 16"
                    onClick={handleClick}
                  >
                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                  </svg>
                </button>
                <div className="card-body">
                  <p className="card-text">
                    {oneMovie.overview.substring(0, 100)}...
                  </p>
                </div>
                <div className="card-footer text-center my-2">
                  <Link
                    to={`/detalle?movieID=${oneMovie.id}`}
                    className="btn btn-primary"
                  >
                    Mas informacion
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
