import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import { startGoogleSignIn } from "../store/auth";
import { useNavigate, Navigate } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";

//styles
import "../css/bootstrap.min.css";
import { useDispatch } from "react-redux";

export const Login = () => {
  const navigate = useNavigate();

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   const email = e.target.email.value;
  //   const password = e.target.password.value;

  //   // eslint-disable-next-line
  //   const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //   if (email === "" || password === "") {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: "Por favor los campos no deben estar vacios!",
  //       footer: '<a href="">Why do I have this issue?</a>',
  //     });
  //     return;
  //   }

  //   if (email !== "" && !mailformat.test(email)) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Debe ser un correo valido",
  //     });
  //     return;
  //   }

  //   if (email !== "challenge@alkemy.org" || password !== "react") {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: "Las credenciales deben ser validas!",
  //       footer: '<a href="">Revisa nuevamente</a>',
  //     });
  //     return;
  //   }

  //   axios.post("/api/login", { email, password }).then((res) => {
  //     Swal.fire("Datos correctos");
  //     const tokenRecibido = res.data.token;
  //     sessionStorage.setItem("token", tokenRecibido);
  //     navigate("/listado");
  //   });
  // };

  let token = sessionStorage.getItem("token");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
  };
  // console.log({ email, password })

  const onGoogleSignIn = () => {
    console.log("onGoogleSignIn");
    dispatch(startGoogleSignIn());
  };

  return (
    <>
      {token && <Navigate to="/listado" />}
      <Container>
        <Row>
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <h1 className="shawow-sm tex-success mt-5 p-3 text-center rounded">
              {" "}
              Iniciar session{" "}
            </h1>
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Direccion de correo
                </label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <div htmlFor="exampleInputPassword1" className="form-label">
                  Contraña
                </div>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                />
              </div>
              <div className="d-flex justify-content-center">
                <button
                  onClick={onGoogleSignIn}
                  // type="submit"
                  className="btn btn-primary d-flex justify-content-center"
                >
                  Inicia sesión con Google
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
