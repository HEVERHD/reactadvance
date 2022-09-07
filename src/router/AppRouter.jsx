import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../components/Login";
import { ListadoRoutes } from "./ListadoRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<ListadoRoutes />} />
      </Routes>
    </>
  );
};
