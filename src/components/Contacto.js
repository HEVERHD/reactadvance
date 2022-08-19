import React from "react";
import profile from "../assets/profile.jpg";

export const Contacto = () => {
  return (
    <div className="container">
      <h1 className="text-center my-3">Contacto</h1>
      <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card my-3 text-center">
            <h5 className="card-title text-center">
              <b>Hevert Gelis Diaz</b>
            </h5>
            <img
              src={profile}
              className="img-rounded rounded float-left card-img-top img-thumbnail img-fluid"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text text-center">
                <b>Correo:</b>
                <b> hever11.hdgd@gmail.com</b>

                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
