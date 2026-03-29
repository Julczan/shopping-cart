import { Navigation } from "./Navbar-styles";
import { Button } from "./Navbar-styles";

function Navbar() {
  return (
    <Navigation>
      <Button>Home Page</Button>
      <Button>Shop Page</Button>
      <Button>Cart</Button>
    </Navigation>
  );
}

export default Navbar;
