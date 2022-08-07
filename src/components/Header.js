import React from "react";
import { Link } from "react-router-dom";

//components
import { Buscador } from "./Buscador";
//Boostrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const Header = () => {



  return (
//     <nav className="navbar navbar-expand-lg bg-light">
//   <div className="container-fluid">
//     <Link className="navbar-brand" to="/"> Pelis HD </Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNavDropdown">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <Link className="nav-link active" aria-current="page" to="/listado">Listado de peliculas</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/">Contacto</Link>
//         </li>
//       </ul>
//     </div>
//    <Buscador />
//   </div>
// </nav>

<Navbar bg="light" expand="lg">
      <Container fluid>
        <Link className="navbar-brand" to="/"> PELIS HD </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className="nav-link" to="/listado">Listado de peliculas</Link>
            <Link className="nav-link" to="#action2">Contacto</Link>  
         </Nav>
          <Buscador />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
