import { useState } from "react";
import { Card } from "./ShopPage-styles";

function ItemCard({ data }) {
  const [quantity, setQuantity] = useState(data.quantity);

  function handleIncrementClick() {
    setQuantity(quantity + 1);
  }

  function handleDecrementClick() {
    setQuantity(quantity - 1);
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
      <button>Add to cart</button>
    </Card>
  );
}

export default ItemCard;
