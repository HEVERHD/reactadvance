import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Buscador = () => {
  const navigate = useNavigate();

  const { status } = useSelector((state) => state.auth);
  const submitHandler = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();

    if (!status) {
      Swal.fire({
        icon: "error",
        text: "Primero debes iniciar session!",
      });
      return;
    }

    if (keyword.length === 0) {
      Swal.fire({
        title: "Por favor escribe una palabra clave",
        text: "Ejemplo Minions, cars ",
      });
    } else if (keyword.length < 4) {
      Swal.fire({
        title: "Por favor escribe mas de 4 caracteres",
      });
    } else {
      e.currentTarget.keyword.value = "";
      navigate(`/resultado?keyword=${keyword}`);
    }
  };

  return (
    <form onSubmit={submitHandler} className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="text"
        name="keyword"
        placeholder="Busca tu pelicula"
        aria-label="Search"
      />
      <button className="btn btn-secondary me-2" type="submit">
        Encontrar..
      </button>
    </form>
  );
};
