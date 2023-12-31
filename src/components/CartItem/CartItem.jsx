import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, name, price, category, stock }) => {
  const cartContext = useContext(CartContext);
  const item = { id, name, price };

  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-start`}
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{name.split(" ").slice(0, 3).join(" ")}</div>
        <small>${price}</small>
      </div>
      <span>{item.quantity}</span>
      <a
        className="btn border-0 py-2"
        onClick={() => cartContext.removeItem(item)}
      >
        <i className="bi bi-cart-dash-fill"></i>
      </a>
    </li>
  );
};

export default CartItem;
