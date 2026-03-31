import { Navigation } from "./Navbar-styles";
import { Button } from "./Navbar-styles";
import { Link } from "react-router";

function Navbar() {
  return (
    <Navigation>
      <Link to={"/"}>Home Page</Link>
      <Link to={"/shop"}>Shop Page</Link>
      <Link to={"/cart"}>Cart</Link>
    </Navigation>
  );
}

export default Navbar;
