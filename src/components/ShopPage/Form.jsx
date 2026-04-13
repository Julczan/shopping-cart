import { useState } from "react";
import { useOutletContext } from "react-router";
import { AddBtn, RemoveBtn, StyledBtn, StyledForm } from "./ShopPage-styles";
import { CircleMinus, CirclePlus, ShoppingCart } from "lucide-react";

function Form({ data }) {
  const { productsCart, addToCart, removeFromCart } = useOutletContext();
  const [quantity, setQuantity] = useState(data.quantity);

  function handleAddToCart(e) {
    e.preventDefault();
    addToCart(data, quantity);
  }

  function handleRemoveFromCart() {
    removeFromCart(data.id);
  }

  function handleIncrementClick() {
    setQuantity(quantity + 1);
  }

  function handleDecrementClick() {
    setQuantity(quantity - 1);
  }

  if (productsCart.length !== 0) {
    if (productsCart.some((item) => item.id === data.id)) {
      return (
        <>
          <p>{data.price * quantity}$</p>
          <RemoveBtn
            aria-label="remove from cart"
            onClick={handleRemoveFromCart}
          >
            <ShoppingCart />
          </RemoveBtn>
        </>
      );
    }
  }

  return (
    <>
      <p>{data.price * quantity}$</p>
      <StyledForm onSubmit={handleAddToCart}>
        <StyledBtn
          disabled={quantity <= 1}
          type="button"
          onClick={handleDecrementClick}
          aria-label="decrement"
        >
          <CircleMinus />
        </StyledBtn>
        <input
          id="quantity-input"
          type="number"
          min={1}
          max={99}
          value={quantity}
          onChange={(e) => setQuantity(+e.target.value)}
        />
        <StyledBtn
          disabled={quantity >= 99}
          type="button"
          onClick={handleIncrementClick}
          aria-label="increment"
        >
          <CirclePlus />
        </StyledBtn>
        <AddBtn type="submit" aria-label="add to cart">
          <ShoppingCart />
        </AddBtn>
      </StyledForm>
    </>
  );
}

export default Form;
