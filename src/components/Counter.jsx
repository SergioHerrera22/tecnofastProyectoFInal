import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Button from "react-bootstrap/Button";

function Counter({ item }) {
  const [count, setCount] = useState(0);

  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSub = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({ ...item, count });
  };

  return (
    <div className="d-flex align-items-center mb-4">
      <p
        className="text-dark fw-bolder fs-4 me-3 mb-0"
        style={{ width: "40px", textAlign: "center" }}
      >
        {count}
      </p>

      <Button
        onClick={handleSub}
        variant="danger"
        disabled={count === 0}
        className="fw-bold me-1 px-3 py-1"
      >
        -
      </Button>

      <Button
        onClick={handleAdd}
        variant="success"
        className="fw-bold me-3 px-3 py-1"
      >
        +
      </Button>

      <Button
        onClick={handleAddToCart}
        disabled={count === 0}
        variant="warning" // Fondo Amarillo
        className="flex-grow-1 fw-bold text-dark border border-2 border-dark shadow py-2"
      >
        AGREGAR AL CARRITO{" "}
        <span role="img" aria-label="shopping bag" className="ms-1">
          🛍️
        </span>
      </Button>
    </div>
  );
}

export default Counter;
