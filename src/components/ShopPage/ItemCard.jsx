import Form from "./Form";
import { Card, StyledImg } from "./ShopPage-styles";

function ItemCard({ data }) {
  return (
    <Card>
      <StyledImg src={data.images[0]} />
      <p>{data.title}</p>
      <Form data={data} />
    </Card>
  );
}

export default ItemCard;
