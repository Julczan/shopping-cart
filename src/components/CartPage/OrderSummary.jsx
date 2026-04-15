import { useOutletContext } from "react-router";
import {
  CheckoutBtn,
  DecoratedText,
  StyledSum,
  SumTitle,
} from "./CartPage-styles";
import { SubText } from "../HomePage/HomePage-styles";

function OrderSummary() {
  const { productsCart } = useOutletContext();

  let priceSum = 0;
  let summedQuantity = 0;

  function handleCheckout() {
    alert("Thank you for giving me money! Please spend more :)");
  }

  if (productsCart.length !== 0) {
    productsCart.map((product) => {
      const price = product.price * product.quantity;
      priceSum += price;
      summedQuantity += product.quantity;
    });
  }

  return (
    <StyledSum>
      <SumTitle>Order Summary</SumTitle>
      <SubText>Number of items: {summedQuantity}</SubText>
      <SubText>
        Summed price: <DecoratedText>{priceSum}$</DecoratedText>
      </SubText>

      {productsCart.length !== 0 ? (
        <CheckoutBtn onClick={handleCheckout}>Checkout</CheckoutBtn>
      ) : (
        ""
      )}
    </StyledSum>
  );
}
export default OrderSummary;
