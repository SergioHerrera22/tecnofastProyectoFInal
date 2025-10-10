import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router";

function Item({ item }) {
  const navigate = useNavigate();

  return (
    <Col lg={3} md={6} className="mb-4">
      <Card className="h-100 shadow-lg border-0">
        {" "}
        {/* Tarjeta limpia, sin borde, con sombra */}
        {/* Contenedor de la Imagen */}
        <div className="bg-white rounded-top">
          <Card.Img
            variant="top"
            src={item.image}
            style={{ height: 300, objectFit: "cover" }}
            className="p-3" // Padding para separar la imagen del borde
          />
        </div>
        <Card.Body className="d-flex flex-column bg-dark text-white rounded-bottom">
          {" "}
          {/* Fondo negro */}
          {/* Título: Amarillo en negrita */}
          <Card.Title className="fw-bold fs-5 text-warning mb-2">
            {item.name}
          </Card.Title>
          {/* Categoría o Descripción Breve: En blanco/gris */}
          <Card.Text className="text-white-50 mb-3">{item.category}</Card.Text>
          {/* Precio - Destacado en Amarillo/Negro */}
          <p className="fw-bold fs-4 text-warning">${item.price}</p>
          {/* Botón: Impactante, Amarillo y Negro, pegado al final */}
          <Button
            onClick={() => navigate(`/item/${item.id}`)}
            variant="warning" // Fondo Amarillo
            className="mt-auto fw-bold text-dark border border-2 border-dark shadow" // Borde Negro y Sombra
          >
            VER MÁS
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
