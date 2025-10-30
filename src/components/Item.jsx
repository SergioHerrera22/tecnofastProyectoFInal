import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router";

function Item({ item }) {
  const navigate = useNavigate();

  return (
    <Col lg={3} md={6} className="mb-4">
      <Card className="h-100 shadow-lg border-0">
      
        <div className="bg-white rounded-top">
          <Card.Img
            variant="top"
            src={item.image}
            style={{ height: 300, objectFit: "cover" }}
            className="p-3" 
          />
        </div>
        <Card.Body className="d-flex flex-column bg-dark text-white rounded-bottom">
         
          
          <Card.Title className="fw-bold fs-5 text-warning mb-2">
            {item.name}
          </Card.Title>
        
          <Card.Text className="text-white-50 mb-3">{item.category}</Card.Text>
         
          <p className="fw-bold fs-4 text-warning">${item.price}</p>
        
          <Button
            onClick={() => navigate(`/item/${item.id}`)}
            variant="warning" 
            className="mt-auto fw-bold text-dark border border-2 border-dark shadow" 
          >
            VER MÁS
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
