import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [productsCart, setProductsCart] = useState([]);

  function addToCart(data, quantity) {
    const product = { ...data, quantity: quantity };
    setProductsCart([...productsCart, product]);
  }

  function removeFromCart(id) {
    const updatedCart = productsCart.filter((product) => product.id !== id);
    setProductsCart(updatedCart);
  }

  return (
    <main>
      <Navbar />
      <Outlet context={[productsCart, addToCart, removeFromCart]} />
    </main>
  );
}

export default App;
