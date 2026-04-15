import { useOutletContext } from "react-router";
import { ButtonsDiv, CartItem, CartPageStyled } from "./CartPage-styles";
import OrderSummary from "./OrderSummary";
import { SubText, Title } from "../HomePage/HomePage-styles";
import {
  Card,
  CardsGrid,
  Description,
  ItemInfo,
  RemoveBtn,
  StyledBtn,
  StyledImg,
} from "../ShopPage/ShopPage-styles";
import { CircleMinus, CirclePlus, ShoppingCart } from "lucide-react";

function CartPage() {
  const { productsCart, updateQuantity, removeFromCart } = useOutletContext();

  function handleIncrementQuantity(id, quantity) {
    const newQuantity = quantity + 1;

    updateQuantity(id, newQuantity);
  }

  function handleDecrementQuantity(id, quantity) {
    const newQuantity = quantity - 1;

    updateQuantity(id, newQuantity);
  }

  return (
    <CartPageStyled>
      <Title>Cart Page</Title>
      <CardsGrid>
        {productsCart.length !== 0 ? (
          productsCart.map((product) => (
            <Card key={product.id}>
              <StyledImg src={product.images[0]}></StyledImg>
              <ItemInfo>
                <p>{product.title}</p>
                <Description>{product.description}</Description>
                <p>{product.price * product.quantity}$</p>
                <ButtonsDiv>
                  <StyledBtn
                    disabled={product.quantity <= 1}
                    aria-label="decrement"
                    onClick={() =>
                      handleDecrementQuantity(product.id, product.quantity)
                    }
                  >
                    <CircleMinus />
                  </StyledBtn>
                  <p>Qty: {product.quantity}</p>
                  <StyledBtn
                    disabled={product.quantity >= 99}
                    aria-label="increment"
                    onClick={() =>
                      handleIncrementQuantity(product.id, product.quantity)
                    }
                  >
                    <CirclePlus />
                  </StyledBtn>
                  <RemoveBtn
                    aria-label="remove from cart"
                    onClick={() => removeFromCart(product.id)}
                  >
                    <ShoppingCart />
                  </RemoveBtn>
                </ButtonsDiv>
              </ItemInfo>
            </Card>
          ))
        ) : (
          <SubText>No items found.</SubText>
        )}
      </CardsGrid>
      <OrderSummary />
    </CartPageStyled>
  );
}

export default CartPage;
