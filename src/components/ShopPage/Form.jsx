import { useState } from "react";
import { useOutletContext } from "react-router";

function Form({ data }) {
  const [productsCart, setProductsCart] = useOutletContext();
  const [quantity, setQuantity] = useState(data.quantity);

  function addToCart(e) {
    e.preventDefault();

    const product = { ...data, quantity: quantity };
    setProductsCart([...productsCart, product]);
  }

  function handleIncrementClick() {
    setQuantity(quantity + 1);
  }

  function handleDecrementClick() {
    setQuantity(quantity - 1);
  }

  if (productsCart) {
    productsCart.map((e) => {
      console.log(e.id);
    });
  }

  return (
    <form onSubmit={addToCart}>
      <button type="button" onClick={handleDecrementClick}>
        Decrement
      </button>
      <input
        id="quantity-input"
        type="number"
        min={1}
        max={99}
        value={quantity}
        onChange={(e) => setQuantity(+e.target.value)}
      />
      <button type="button" onClick={handleIncrementClick}>
        Increment
      </button>
      <button type="submit">Add to cart</button>
    </form>
  );
}

export default Form;
