import { useState } from "react";
import { Test } from "./Navbar-styles";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Test onClick={() => setIsActive(!isActive)} $primary={isActive}>
      hello
    </Test>
  );
}

export default Navbar;
