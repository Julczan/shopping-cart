import CartItemsQty from "./CartItemsQty";
import { Logo, Navigation, NavLink, NavLinks } from "./Navbar-styles";

function Navbar({ products }) {
  return (
    <Navigation>
      <Logo>Cents</Logo>
      <NavLinks>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/shop"}>Shop</NavLink>
        <NavLink to={"/cart"}>Cart</NavLink>
        <CartItemsQty products={products} />
      </NavLinks>
    </Navigation>
  );
}

export default Navbar;
