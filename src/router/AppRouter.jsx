import { Route, Routes } from "react-router-dom";
import { Loading } from "../components/Loading";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { useCheckAuth } from "../hooks";
import { ListadoRoutes } from "./ListadoRoutes";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  const status = useCheckAuth();

  if (status === "checking") {
    return <Loading />;
  }

  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/register" element={<Register />} />

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
