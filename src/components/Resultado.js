import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export const Resultado = () => {
  let query = new URLSearchParams(window.location.search);
  let keyword = query.get("keyword");

  const [movieResult, setMovieResult] = useState([]);

  useEffect(() => {
    const enPoint = `https://api.themoviedb.org/3/search/movie?api_key=eb42fd1735381027e43257fb869cd9ad&language=en-US&query=${keyword}`;
    axios
      .get(enPoint)
      .then((res) => {
        const movieArray = res.data.results;

        if (movieArray.length === 0) {
          Swal.fire({
            title: "No se encontro lo que buscabas!",
          });
        }
        setMovieResult(movieArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [keyword]);

  return (
    <>
      <h2 className="text-center">
        Resultados encontrados : <em>{keyword}</em>
      </h2>
      {movieResult.length === 0 && <h3> No hay Resultados</h3>}
      <div className="row">
        <Link className="btn btn-primary" to="/listado" role="button">
          Regresar
        </Link>
        {movieResult.map((oneMovie, idx) => {
          return (
            <div
              className="card-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
              key={idx}
            >
              <div className="card my-3">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {oneMovie.title.substring(0, 35)}...
                  </h5>
                </div>
                <div className=" card-footer text-center my-2">
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
