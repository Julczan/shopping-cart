function CartItemsQty({ products }) {
  if (products.length !== 0) {
    return <p>{products.length}</p>;
  }

  return "";
}

export default CartItemsQty;
