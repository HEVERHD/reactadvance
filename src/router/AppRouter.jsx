import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../components/Login";
import { ListadoRoutes } from "./ListadoRoutes";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <ListadoRoutes />
            </PrivateRoute>
          }
        />

        {/* <Route path="/*" element={<ListadoRoutes />} /> */}
      </Routes>
    </>
  );
};
