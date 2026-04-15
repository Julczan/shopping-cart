import styled from "styled-components";
import { CardsGrid, ShopStyled, StyledBtn } from "../ShopPage/ShopPage-styles";

export const CartItem = styled.div`
  height: 300px;
  width: 300px;
  background: white;
  border: black solid 2px;
`;

export const CartPageStyled = styled(ShopStyled)``;

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const SumTitle = styled.h2`
  color: var(--text-primary);
`;

export const StyledSum = styled.div`
  align-self: center;
  text-align: center;
`;

export const CheckoutBtn = styled(StyledBtn)`
  background: var(--background-light);
`;
