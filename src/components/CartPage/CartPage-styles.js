import styled from "styled-components";
import { CardsGrid, ShopStyled, StyledBtn } from "../ShopPage/ShopPage-styles";
import { StyledSpan } from "../HomePage/HomePage-styles";

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
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CheckoutBtn = styled(StyledBtn)`
  background: var(--background-light);
  color: var(--text-primary);
  border: solid 2px var(--btn-primary);
  border-radius: 5px;
`;

export const DecoratedText = styled(StyledSpan)`
  text-decoration: underline var(--btn-primary);
`;
