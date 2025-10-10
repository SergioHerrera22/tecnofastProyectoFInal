import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Counter from "./Counter";

function ItemDetail({ item }) {
  return (
    <Container className="mt-5 py-5">
      <Row className="shadow-lg p-4 bg-white rounded-3 border border-3 border-dark">
        {" "}
        {/* Estructura de marco */}
        {/* Columna de la Imagen: Fondo Negro */}
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center bg-dark p-3 rounded-start-3"
        >
          <Image
            src={item?.image}
            alt={item?.name}
            style={{ maxHeight: 500, width: "100%", objectFit: "contain" }}
            className="p-3 bg-white" // La imagen tiene un "marco" blanco dentro del negro
          />
        </Col>
        {/* Columna de la Información y Compra */}
        <Col md={6} className="p-4 d-flex flex-column">
          <h2 className="fw-bolder text-dark mb-2 fs-1">{item?.name}</h2>

          {/* Descripción: Usamos un gris oscuro para texto secundario */}
          <p className="text-secondary mb-4 lead">{item?.description}</p>

          {/* Precio: Amarillo Impactante */}
          <p className="display-4 fw-bolder text-warning mb-4 border-bottom border-dark pb-3">
            ${item?.price}
          </p>

          {/* Componente Counter: Mantenemos tu lógica original */}
          <div className="mt-auto pt-3">
            <Counter item={item} />

            {/* Botón "Volver al Catálogo" (Implementación del estilo visto) */}
            <Button
              variant="dark"
              onClick={() => window.history.back()}
              className="w-100 fw-bold text-warning mt-2 py-2"
            >
              ← Volver al Catálogo
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemDetail;
