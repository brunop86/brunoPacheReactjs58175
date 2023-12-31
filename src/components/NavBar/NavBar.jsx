import CartWidget from "../CartWidget/CartWidget";
import logo from "./assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to={"/"}>
        <img src={logo} alt="logo" height="100px" />
      </Link>
      <div>
        <ul>
          <li>
            <NavLink to={`/category/clothing`}>Clothing</NavLink>
          </li>
          <li>
            <NavLink to={`/category/racquets`}>Racquets</NavLink>
          </li>
          <li>
            <NavLink to={`/category/equipment`}>Equipment</NavLink>
          </li>
          <li>
            <NavLink to={`/category/accessories`}>Accesories</NavLink>
          </li>
        </ul>
      </div>
      <button
        className="btn btn-primary px-4 position-relative"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#carrito"
        aria-controls="carrito"
      >
        <i className="bi bi-cart-fill"></i>
        <CartWidget />
      </button>
    </nav>
  );
};
export default NavBar;
