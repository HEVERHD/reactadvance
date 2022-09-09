import { Col, Container, Row } from "react-bootstrap";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <Container>
      <Row>
        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg ">
          <h1 className="shawow-sm tex-success mt-5 p-3 text-center rounded">
            {title}
          </h1>

          {children}
        </Col>
      </Row>
    </Container>
  );
};
