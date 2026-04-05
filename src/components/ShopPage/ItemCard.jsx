import { Card } from "./ShopPage-styles";

function ItemCard({ data }) {
  return (
    <Card>
      <img src={data.images[0]} />
      <p>{data.title}</p>
      <p>{data.description}</p>
      <button>Decrement</button>
      <input type="number" min={1} max={99} value={data.quantity}></input>
      <button>Increment</button>
      <button>Add to cart</button>
    </Card>
  );
}

export default ItemCard;
