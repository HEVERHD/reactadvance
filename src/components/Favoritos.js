import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { ButtonList } from "./ButtonList";

export const Favoritos = (props) => {
  const { status, displayName } = useSelector((state) => state.auth);

  return (
    <>
      {!status && <Navigate to="/" />}
      <div>
        <h1 className="text-center my-3">
          {!props.favorite.length > 0
            ? `!!ups ${displayName.substring(0, 7)}"No tienes favoritos"`
            : "Actualmente tienes:"}
          {props.favorite.length > 0 && (
            <span className="text-danger"> {props.favorite.length}</span>
          )}
          {props.favorite.length > 0 ? "" : <ButtonList />}
        </h1>
      </div>
      <div className="row ">
        {props.favorite.map((oneMovie, idx) => {
          return (
            <div
              className="card-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
              key={idx}
            >
              <div className="card my-3 ">
                <h5 className="card-title text-center">
                  <b>{oneMovie.title.substring(0, 25)}...</b>
                </h5>
                <img
                  src={oneMovie.img}
                  className=" img-rounded rounded float-left card-img-top img-thumbnail img-fluid animate__animated animate__flipInY"
                  alt="..."
                />
                <button
                  data-movie-id={oneMovie.id}
                  onClick={props.addOrRemoveFavorite}
                  className="favorite-btn "
                >
                  🖤
                </button>
                <div className="card-body">
                  <p className="card-text">
                    {oneMovie.overview.substring(0, 100)}...
                  </p>
                </div>
                <div className="card-footer text-center my-2">
                  <Link
                    to={`/detalle?movieID=${oneMovie.id}`}
                    className="btn btn-primary"
                  >
                    Mas informacion
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
