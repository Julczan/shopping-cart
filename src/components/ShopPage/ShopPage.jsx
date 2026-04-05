import useShopData from "../../api/useShopData";
import ItemCard from "./ItemCard";

function ShopPage() {
  const { shopData, error, loading } = useShopData();

  const header = <h1>Shop Page</h1>;

  if (loading) {
    return (
      <>
        {header}
        <p>Loading...</p>
      </>
    );
  }

  if (error) {
    return (
      <>
        {header}
        <p>{error}</p>
      </>
    );
  }

  return shopData.map((data) => (
    <ItemCard data={{ ...data, quantity: 1 }} key={data.id} />
  ));
}

export default ShopPage;
