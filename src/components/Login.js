import axios from "axios";
import React, { useMemo } from "react";
import Swal from "sweetalert2";
import { startGoogleSignIn } from "../store/auth";
import { useNavigate, Navigate } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";

//styles
import "../css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
  const { status } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const authenticated = useMemo(() => status === "authenticated", [status]);

  const submitHandler = (e) => {
    e.preventDefault();
    // const email = e.target.email.value;
    // const password = e.target.password.value;

    // // eslint-disable-next-line
    // const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // if (email === "" || password === "") {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "Por favor los campos no deben estar vacios!",
    //     footer: '<a href="">Why do I have this issue?</a>',
    //   });
    //   return;
    // }

    // if (email !== "" && !mailformat.test(email)) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Debe ser un correo valido",
    //   });
    //   return;
    // }

    // if (email !== "challenge@alkemy.org" || password !== "react") {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "Las credenciales deben ser validas!",
    //     footer: '<a href="">Revisa nuevamente</a>',
    //   });
    //   return;
    // }

    // axios.post("/api/login", { email, password }).then((res) => {
    //   Swal.fire("Datos correctos");
    //   const tokenRecibido = res.data.token;
    //   sessionStorage.setItem("token", tokenRecibido);
    //   navigate("/listado");
    // });
  };

  const dispatch = useDispatch();

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <>
      {authenticated && <Navigate to="/listado" />}
      <Container>
        <Row>
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <h1 className="shawow-sm tex-success mt-5 p-3 text-center rounded">
              Inicia sesión
            </h1>
            <form onSubmit={submitHandler}>
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
              <div className="d-grid col-12 mx-auto">
                <button
                  type="submit"
                  className="btn btn-primary d-flex justify-content-center"
                >
                  Inicia sesión
                </button>

                <button
                  onClick={onGoogleSignIn}
                  // type="submit"
                  className="btn btn-primary d-flex my-3 justify-content-center "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-google"
                    viewBox="0 0 16 16"
                  >
                    Google
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />{" "}
                  </svg>
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
