import { useOutletContext } from "react-router";
import { CheckoutBtn, StyledSum, SumTitle } from "./CartPage-styles";
import { SubText } from "../HomePage/HomePage-styles";

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
    <StyledSum>
      <SumTitle>Order Summary</SumTitle>
      <SubText>Number of items: {productsCart.length}</SubText>
      <SubText>Summed price: {priceSum}$</SubText>
      <CheckoutBtn>Checkout</CheckoutBtn>
    </StyledSum>
  );
}
export default OrderSummary;
