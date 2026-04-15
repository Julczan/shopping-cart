import CartItemsQty from "./CartItemsQty";
import { Logo, Navigation, NavLinks } from "./Navbar-styles";
import { Link } from "react-router";

function Navbar({ products }) {
  return (
    <Navigation>
      <Logo>Money</Logo>
      <NavLinks>
        <Link to={"/"}>Home</Link>
        <Link to={"/shop"}>Shop</Link>
        <Link to={"/cart"}>Cart</Link>
        <CartItemsQty products={products} />
      </NavLinks>
    </Navigation>
  );
}

export default Navbar;
