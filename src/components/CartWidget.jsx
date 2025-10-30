import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router";

function CartWidget() {
  const { getQuantity } = useContext(CartContext);
  const quantity = getQuantity();
  const navigate = useNavigate();

  return (
    <Button
      variant="dark" 
      onClick={() => {
      
      }}
      className="ms-3 shadow-lg border border-2 border-dark" 
      size="lg" 
    >
     
      <span role="img" aria-label="shopping bag" className="fs-4 text-warning">
        🛍️
      </span>

    
      <Badge
        bg="dark"
        className="text-warning rounded-pill ms-1 align-middle p-2"
      >
        {quantity}
      </Badge>
    </Button>
  );
}

export default CartWidget;
