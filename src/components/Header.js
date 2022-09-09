import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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
            <span className=" nav-link text-danger">
              {props.favorite.length > 0 ? `${props.favorite.length}` : ""}
            </span>
            <Link className="nav-link" to="">
              <b>{displayName}</b>
            </Link>
          </Nav>
          <Buscador />
          <NavLink className="nav-item nav-link" to="/login" onClick={onLogout}>
            Logout
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
