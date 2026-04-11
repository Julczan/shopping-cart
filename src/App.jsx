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

  function updateQuantity(id, newQuantity) {
    const updatedProducts = productsCart.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setProductsCart(updatedProducts);
  }

  return (
    <main>
      <Navbar products={productsCart} />
      <Outlet
        context={{ productsCart, addToCart, updateQuantity, removeFromCart }}
      />
    </main>
  );
}

export default App;
