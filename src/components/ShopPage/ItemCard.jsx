import Form from "./Form";
import { Card, Description, ItemInfo, StyledImg } from "./ShopPage-styles";

function ItemCard({ data }) {
  return (
    <Card>
      <StyledImg src={data.images[0]} />
      <ItemInfo>
        <p>{data.title}</p>
        <Description>{data.description}</Description>
        <Form data={data} />
      </ItemInfo>
    </Card>
  );
}

export default ItemCard;
