import { useOutletContext } from "react-router";

function OrderSummary() {
  const { productsCart } = useOutletContext();

  let priceSum = 0;

  if (productsCart.length !== 0) {
    productsCart.map((product) => {
      const price = product.price * product.quantity;
      priceSum += price;
    });
  }

  return (
    <div>
      Order Summary
      <p>{priceSum}</p>
    </div>
  );
}
export default OrderSummary;
