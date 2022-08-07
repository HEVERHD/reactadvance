import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";


export const Listado = () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const enPoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=eb42fd1735381027e43257fb869cd9ad&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
    axios.get(enPoint).then((res) => {
      const apiData = res.data;
      setMovieList(apiData.results);
    })
      .catch(err =>{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Por favor los campos no deben estar vacios!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      })
  }, []);

  let token = sessionStorage.getItem("token");

  return (
    <>
      {!token && <Navigate to="/" />}

      <div className="row">
        {movieList.map((oneMovie, idx) => {
          return (
            <div className="card-group col-xs-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
              <div className="card my-3">
                <img src={ `https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{ oneMovie.title.substring(0, 35) }...</h5>
                  <p className="card-text">
                   { oneMovie.overview.substring(0, 100) }...
                  </p>
                 
                </div>
                <div className="card-footer text-center my-2" >
                <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">
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
