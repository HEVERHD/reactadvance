import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";

//styles
import "../css/bootstrap.min.css";

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
        icon: "error",
        title: "Oops...",
        text: "Por favor los campos no deben estar vacios!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
      return;
    }

    if (email !== "" && !mailformat.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Debe ser un correo valido",
      });
      return;
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las credenciales deben ser validas!",
        footer: '<a href="">Revisa nuevamente</a>',
      });
      return;
    }

    axios
      .post("http://challenge-React.alkemy.org", { email, password })
      .then((res) => {
        Swal.fire("Datos correctos");
        const tokenRecibido = res.data.token;
        localStorage.setItem("token", tokenRecibido);
        navigate("/listado");
      });
  };

  return (
    // <div className="container">
    //                 <div className="tex-center">
    //                   <h2 className="h4 text-gray-900 mb-4">Inicia session</h2>
    //                 </div>
    //                 <form className="user" onSubmit={submitHandler}>
    //                   <div className="form-group">
    //                     <input
    //                       className="form-control form-control-user"
    //                       type="text"
    //                       name="email"
    //                       placeholder="Enter Email Address..."
    //                     />
    //                   </div>
    //                   <div className="form-group">
    //                     <input
    //                       className="form-control form-control-user"
    //                       type="password"
    //                       name="password"
    //                       placeholder="Password"
    //                     />
    //                   </div>
    //                   <button className="btn btn-primary btn-user btn-block" type="submit">Ingresar</button>
    //                   </form>
    //               </div>
    <>
      <Container>
        <h1 className="shawow-sm tex-success mt-5 p-3 text-center rounded">
          {" "}
          Admin{" "}
        </h1>
        <Row>
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
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
                <div for="exampleInputPassword1" className="form-label">
                  Password
                </div>
                <input
                type="password"
                   name="password"
                  className="form-control"
                 
                />
              </div>
              <div className="mb-3 form-check">
                  
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
