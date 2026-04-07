import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [productsCart, setProductsCart] = useState([]);

  return (
    <main>
      <Navbar />
      <Outlet context={[productsCart, setProductsCart]} />
    </main>
  );
}

export default App;
