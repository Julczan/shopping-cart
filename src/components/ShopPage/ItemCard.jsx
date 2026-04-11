import Form from "./Form";
import { Card } from "./ShopPage-styles";

function ItemCard({ data }) {
  return (
    <Card>
      <img src={data.images[0]} />
      <p>{data.title}</p>
      <Form data={data} />
    </Card>
  );
}

export default ItemCard;
