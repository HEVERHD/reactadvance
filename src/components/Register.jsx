import React, { useMemo } from "react";
import Swal from "sweetalert2";
import {
  checkingAuthentication,
  startCreatingUserWithEmailPassword,
} from "../store/auth";
import { useNavigate, Link, Navigate } from "react-router-dom";

//styles
import "../css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../hooks";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

export const Register = () => {
  const { status } = useSelector((state) => state.auth);
  const authenticated = useMemo(() => status === "authenticated", [status]);

  const navigate = useNavigate();
  //   const authenticated = useMemo(() => status === "authenticated", [status]);

  const { displayName, email, password, onInputChange, formState } =
    useForm(formData);

  const onSubmit = (e) => {
    console.log(formState);
    e.preventDefault();
    dispatch(startCreatingUserWithEmailPassword(formState));

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
    // Swal.fire("Datos correctos");
    //   const tokenRecibido = res.data.token;
    //   sessionStorage.setItem("token", tokenRecibido);
    //   navigate("/listado");
    // });
  };
  const dispatch = useDispatch();

  return (
    <>
      {authenticated && <Navigate to="/listado" />}
      <AuthLayout title="Crear cuenta">
        <form
          onSubmit={onSubmit}
          className="animate__animated animate__fadeIn animate__faster"
        >
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Nombre completo
            </label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Nombre completo ..."
              name="displayName"
              value={displayName}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Direccion de correo
            </label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="example@gmail.com"
              name="email"
              value={email}
              onChange={onInputChange}
            />
            <div id="emailHelp" className="form-text">
              Nunca compartiremos su correo electrónico con nadie más.
            </div>
          </div>
          <div className="mb-3">
            <div htmlFor="exampleInputPassword1" className="form-label">
              Contraseña
            </div>
            <input
              value={password}
              onChange={onInputChange}
              type="password"
              name="password"
              className="form-control"
            />
            <div id="emailHelp" className="form-text">
              Nunca compartiremos su contraseña electrónico con nadie más.
            </div>
          </div>
          <div className="d-grid col-12 mx-auto">
            <button
              type="submit"
              className="btn btn-primary d-flex justify-content-center"
            >
              Crear cuenta
            </button>
          </div>
          <div className="form-text justify-content-end">
            <Link to="/login">Ya tengo una cuenta</Link>
          </div>
        </form>
      </AuthLayout>
    </>
  );
};
