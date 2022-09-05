import React from "react";
import { Link } from "react-router-dom";

//components
import { Buscador } from "./Buscador";
//Boostrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";

export const Header = (props) => {
  const { displayName } = useSelector((state) => state.auth);
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
            <span className=" nav-link text-danger">
              {props.favorite.length > 0 ? `${props.favorite.length}` : ""}
            </span>
            <Link className="nav-link" to="">
              <b>{displayName}</b>
            </Link>
          </Nav>
          <Buscador />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
