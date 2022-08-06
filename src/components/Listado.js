import React from "react";
import { Link, Navigate } from "react-router-dom";


export const Listado = () => {

  let token = localStorage.getItem("token");
 
  return (

    <>
    { !token && <Navigate to="/"/> }

    <div className="row">
      <div className="col-3">
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="#" className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="#" className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="#" className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="#" className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="#" className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="#" className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="#" className="btn btn-primary">
              View more
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>

  );
};
