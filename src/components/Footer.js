import React from "react";

export const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>HD Pelis
              </h6>

              <p>App para buscar peliculas y series en linea.</p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> Bogota, Colombia
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                hever11.hdgd@gmail.com
              </p>
              <p>
                <i className="fas fa-print me-3"></i> +57 300 617 6641
              </p>
            </div>
          </div>
        </div>
        <div className="me-5 d-none d-lg-block text-center">
          <span>@HEVERT DAVID {new Date().getFullYear()}</span>
        </div>
      </section>
    </footer>
  );
};
