import React from "react";
import { Link } from "react-router-dom";

export const ButtonList = () => {
  return (
    <div className="row justify-content-center">
      <Link to="/listado" className="btn btn-primary float-right">
        Ver Listado
      </Link>
    </div>
  );
};
