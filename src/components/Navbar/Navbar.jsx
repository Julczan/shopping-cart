import CartItemsQty from "./CartItemsQty";
import { Navigation } from "./Navbar-styles";
import { Link } from "react-router";

function Navbar({ products }) {
  return (
    <Navigation>
      <Link to={"/"}>Home Page</Link>
      <Link to={"/shop"}>Shop Page</Link>
      <Link to={"/cart"}>Cart</Link>
      <CartItemsQty products={products} />
    </Navigation>
  );
}

export default Navbar;
