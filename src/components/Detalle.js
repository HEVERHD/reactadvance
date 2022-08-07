import React from "react";
import { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";

export const Detalle = () => {
  const [movie, setMovie] = useState(null);
  let token = sessionStorage.getItem("token");
  let query = new URLSearchParams(window.location.search);
  let movieID = query.get("movieID");

  useEffect(() => {
    const enPointDetails = `https://api.themoviedb.org/3/movie/${movieID}?api_key=eb42fd1735381027e43257fb869cd9ad&language=es-ES`;
    axios
      .get(enPointDetails)
      .then((res) => {
        const movieData = res.data;
        setMovie(movieData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [movieID]);

  return (
    <>
      {!token && <Navigate to="/" />}

      {!movie && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {movie && (
        <>
          <h2>Titulo : {movie.title}</h2>
          <h6>ID : {movie.id}</h6>
          <Link className="btn btn-primary" to="/listado" role="button">
            Regresar
          </Link>
          <div className="row">
            <div className="col-4">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="img-fluid"
                alt="movieDetails"
              />
            </div>
            <div className="col-8">
              <h5>Feche de estreno : {movie.release_date}</h5>
              <h5>Reseña :</h5>
              <p>{movie.overview}</p>
              <h5> Rating : {movie.vote_average}</h5>
              <h5> Generos :</h5>
              <ul>
                {movie.genres.map((oneGenre) => (
                  <li key={oneGenre.id}> {oneGenre.name} </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};
