import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Listado = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token === null) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="row">
      <div className="col-4"> peli1</div>
      <div className="col-4"> peli2</div>
      <div className="col-4"> peli3</div>
      <div className="col-4"> peli4</div>
      <div className="col-4"> peli5</div>
    </div>
  );
};
