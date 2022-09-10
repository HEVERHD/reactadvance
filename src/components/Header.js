import React from "react";
import { Link } from "react-router-dom";

//components
import { Buscador } from "./Buscador";
//Boostrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../store/auth";
import Swal from "sweetalert2";

export const Header = (props) => {
  const { displayName } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const onLogout = () => {
    Swal.fire({
      title: "Esta seguro?",
      text: "Desea cerrar sesion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Cerrar sesion!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(startLogout());
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Vuelve pronto!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  // const onLogout = () => {
  //   navigate("/login", {
  //     replace: true,
  //   });
  // };
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link className="navbar-brand" to="/listado">
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

            <Link to="/favoritos" className=" nav-link text-danger">
              {props.favorite.length > 0 ? `${props.favorite.length}` : ""}
            </Link>

            <Link className="nav-link" to="">
              <b>{displayName}</b>
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </Nav>
          <Buscador />
          <div className="nav-link navbar-brand">
            <svg
              onClick={onLogout}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-box-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
              />
              <path
                fillRule="evenodd"
                d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
              />
            </svg>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
