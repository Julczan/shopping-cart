import { CartQty } from "./Navbar-styles";

function CartItemsQty({ products }) {
  if (products.length !== 0) {
    return <CartQty>{products.length}</CartQty>;
  }

  return "";
}

export default CartItemsQty;
