import { useOutletContext } from "react-router";
import { CartItem } from "./CartPage-styles";
import OrderSummary from "./OrderSummary";

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
    <>
      <h1>Cart Page</h1>
      {productsCart.length !== 0 ? (
        productsCart.map((product) => (
          <CartItem key={product.id}>
            <img src={product.images[0]}></img>
            <p>{product.title}</p>
            <button
              disabled={product.quantity <= 1}
              onClick={() =>
                handleDecrementQuantity(product.id, product.quantity)
              }
            >
              Decrement
            </button>
            <p>Qty: {product.quantity}</p>
            <button
              disabled={product.quantity >= 99}
              onClick={() =>
                handleIncrementQuantity(product.id, product.quantity)
              }
            >
              Increment
            </button>
            <p>{product.price * product.quantity}$</p>
            <button onClick={() => removeFromCart(product.id)}>
              Remove from cart
            </button>
          </CartItem>
        ))
      ) : (
        <p>No items found.</p>
      )}
      <OrderSummary />
    </>
  );
}

export default CartPage;
