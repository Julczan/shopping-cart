import useShopData from "../../api/useShopData";
import { Title } from "../HomePage/HomePage-styles";
import ItemCard from "./ItemCard";
import { ShopStyled } from "./ShopPage-styles";

function ShopPage() {
  const { shopData, error, loading } = useShopData();

  return (
    <ShopStyled>
      <Title>Shop Page</Title>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {shopData &&
        shopData.map((data) => (
          <ItemCard data={{ ...data, quantity: 1 }} key={data.id} />
        ))}
    </ShopStyled>
  );
}

export default ShopPage;
