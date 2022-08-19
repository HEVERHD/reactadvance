import React from "react";
import { Link } from "react-router-dom";

//components
import { Buscador } from "./Buscador";
//Boostrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link className="navbar-brand" to="/">
          {" "}
          PELIS HD{" "}
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link" to="/listado">
              Listado de peliculas
            </Link>
            <Link className="nav-link" to="/favoritos">
              Favoritos
            </Link>
            <Link className="nav-link" to="#action2">
              Contacto
            </Link>
          </Nav>
          <Buscador />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
