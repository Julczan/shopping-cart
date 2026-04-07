import { useOutletContext } from "react-router";
import ItemCard from "../ShopPage/ItemCard";

function CartPage() {
  const [productsCart, setProductsCart] = useOutletContext();

  if (productsCart.length !== 0) {
    return productsCart.map((data) => <ItemCard data={data} key={data.id} />);
  }

  return (
    <>
      <h1>Cart Page</h1>
      <p>No items found.</p>
    </>
  );
}

export default CartPage;
