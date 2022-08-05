import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Listado = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token)
    if (token === null ){
      navigate("/")
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h2>Soy el compotente listado</h2>
    </div>
  );
};
