import { useState } from "react";
import { Card } from "./ShopPage-styles";
import { useOutletContext } from "react-router";

function ItemCard({ data }) {
  const [productsCart, setProductsCart] = useOutletContext();
  const [quantity, setQuantity] = useState(data.quantity);

  function handleIncrementClick() {
    setQuantity(quantity + 1);
  }

  function handleDecrementClick() {
    setQuantity(quantity - 1);
  }

  function addToCart(data) {
    const product = { ...data, quantity: quantity };
    setProductsCart([...productsCart, product]);
  }

  return (
    <Card>
      <img src={data.images[0]} />
      <p>{data.title}</p>
      <p>{data.description}</p>
      <button onClick={handleDecrementClick}>Decrement</button>
      <input
        type="number"
        min={1}
        max={99}
        value={quantity}
        onChange={(e) => setQuantity(+e.target.value)}
      ></input>
      <button onClick={handleIncrementClick}>Increment</button>
      <button onClick={() => addToCart(data)}>Add to cart</button>
    </Card>
  );
}

export default ItemCard;
