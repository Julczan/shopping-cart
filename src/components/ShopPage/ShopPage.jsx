import useShopData from "../../api/useShopData";
import { ShopCard } from "./ShopPage-styles";

function ShopPage() {
  const { shopData, error, loading } = useShopData();

  console.log(shopData);

  return (
    <>
      <h1>Shop Page</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {shopData &&
        shopData.map((data) => (
          <ShopCard key={data.id}>
            <p>{data.title}</p>
            <img src={data.images[0]} alt="some" />
          </ShopCard>
        ))}
    </>
  );
}

export default ShopPage;
