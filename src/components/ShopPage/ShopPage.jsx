import useShopData from "../../api/useShopData";
import ItemCard from "./ItemCard";

function ShopPage() {
  const { shopData, error, loading } = useShopData();

  return (
    <>
      <h1>Shop Page</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {shopData &&
        shopData.map((data) => <ItemCard data={data} key={data.id} />)}
    </>
  );
}

export default ShopPage;
