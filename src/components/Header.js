import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <div className="container-fluid">
    //     <Link className="navbar-brand" to="/">
    //       Home
    //     </Link>
    //     <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
    //       <ul className="navbar-nav">
    //         <li className="nav-item dropdown">            
    //           <Link className="navbar-brand" to="/listado">Listado</Link>
    //         </li>
    //         <li>
    //           <Link className="navbar-brand" to="/">Contacto</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/listado">Listado de peliculas</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Contacto</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};
