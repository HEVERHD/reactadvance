import axios from "axios";
import React from "react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

export const Login = () => {

 const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // eslint-disable-next-line
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email === "" || password === "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor los campos no deben estar vacios!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
      return;
    }

    if (email !== "" && !mailformat.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Debe ser un correo valido',
      })
      return;
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las credenciales deben ser validas!',
        footer: '<a href="">Revisa nuevamente</a>'
      })
      return;
    }

    
    axios
    .post("http://challenge-React.alkemy.org", {email, password})
    .then(res =>{
      Swal.fire('Datos correctos')
      const tokenRecibido = res.data.token;
      localStorage.setItem("token", tokenRecibido )
      navigate("/listados");
    
    })
  };

  return (
    <>

      <h2> Inicia session </h2>
      <form onSubmit={submitHandler}>
        <label>
          <span> Email : </span>
          <input type="text" name="email" /> <br />
        </label>
        <label>
          <span> Password : </span>
          <input type="password" name="password" />
          <br />
        </label>
        <button type="submit">Ingresar</button>
      </form>
   
    </>
  );
};
