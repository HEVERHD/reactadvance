import Swal from "sweetalert2";
import {
  loginWithEmailPassword,
  registerUserWithEmailPassword,
  singInWithGoogle,
  logoutFirebase,
} from "../../firebase/provider";

import { checkingCredentials, logout, login } from "./";

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await singInWithGoogle();
    if (result.ok === true)
      return Swal.fire({
        position: "center",
        icon: "success",
        title: `Bienvenido disfruta la App`,
        showConfirmButton: false,
        timer: 1500,
      });
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  if (displayName === "" || email === "")
    return Swal.fire({
      position: "center",
      icon: "warning",
      title: `Error.....`,
      text: "Completa todos los campos",
      showConfirmButton: true,
      timer: 3000,
    });
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await registerUserWithEmailPassword({
      email,
      password,
      displayName,
    });

    if (result.ok === true)
      return Swal.fire({
        position: "center",
        icon: "success",
        title: `Cuenta creada correctamente`,
        text: "Bienvenido disfruta la App",
        showConfirmButton: true,
        timer: 3000,
      });
    if (!result.ok) dispatch(logout(result));
    dispatch(login(result));

    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await loginWithEmailPassword({ email, password });
    console.log(result);

    if (result.ok === true)
      return Swal.fire({
        position: "center",
        icon: "success",
        title: `Bienvenido disfruta la App`,
        showConfirmButton: false,
        timer: 1500,
      });
    if (!result.ok) dispatch(logout(result));
    dispatch(login(result));
    Swal.fire({
      icon: "error",
      title: "Debes estar registrado...",
      text: "de lo contrario revisa las credenciales de ingreso",
    });
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();

    dispatch(logout());
  };
};
