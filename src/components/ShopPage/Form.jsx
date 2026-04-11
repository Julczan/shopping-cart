import { useState } from "react";
import { useOutletContext } from "react-router";

function Form({ data }) {
  const { productsCart, addToCart, removeFromCart } = useOutletContext();
  const [quantity, setQuantity] = useState(data.quantity);

  function handleAddToCart(e) {
    e.preventDefault();
    addToCart(data, quantity);
  }

  function handleRemoveFromCart() {
    removeFromCart(data.id);
  }

  function handleIncrementClick() {
    setQuantity(quantity + 1);
  }

  function handleDecrementClick() {
    setQuantity(quantity - 1);
  }

  if (productsCart.length !== 0) {
    if (productsCart.some((item) => item.id === data.id)) {
      return <button onClick={handleRemoveFromCart}>Remove from cart</button>;
    }
  }

  return (
    <>
      <p>{data.price * quantity}$</p>
      <form onSubmit={handleAddToCart}>
        <button
          disabled={quantity <= 1}
          type="button"
          onClick={handleDecrementClick}
        >
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
        <button
          disabled={quantity >= 99}
          type="button"
          onClick={handleIncrementClick}
        >
          Increment
        </button>
        <button type="submit">Add to cart</button>
      </form>
    </>
  );
}

export default Form;
