import Form from "./Form";
import {
  Card,
  Description,
  ItemInfo,
  ItemTitle,
  StyledImg,
} from "./ShopPage-styles";

function ItemCard({ data }) {
  return (
    <Card>
      <StyledImg src={data.images[0]} />
      <ItemInfo>
        <ItemTitle>{data.title}</ItemTitle>
        <Description>{data.description}</Description>
        <Form data={data} />
      </ItemInfo>
    </Card>
  );
}

export default ItemCard;
