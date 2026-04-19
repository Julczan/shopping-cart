import useShopData from "../../api/useShopData";
import { Title } from "../HomePage/HomePage-styles";
import ItemCard from "./ItemCard";
import { CardsGrid, Loader, ShopStyled } from "./ShopPage-styles";

function ShopPage() {
  const { shopData, error, loading } = useShopData();

  return (
    <ShopStyled>
      <Title>Shop Page</Title>
      <CardsGrid>
        {loading && <Loader>Loading...</Loader>}
        {error && <p>{error}</p>}
        {shopData &&
          shopData.map((data) => (
            <ItemCard data={{ ...data, quantity: 1 }} key={data.id} />
          ))}
      </CardsGrid>
    </ShopStyled>
  );
}

export default ShopPage;
