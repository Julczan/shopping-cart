import styled, { keyframes } from "styled-components";
import { slideIn } from "../HomePage/HomePage-styles";

export const ShopStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 0px;
  @media (min-width: 600px) {
    padding: 40px 10px;
  }
`;

export const StyledImg = styled.img`
  height: 300px;
  width: 300px;
  transition: transform 250ms;
`;

export const Card = styled.div`
  background: var(--background-dark);
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  position: relative;
  height: 430px;
  border-radius: 5px;
  text-align: center;
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
  animation: ${slideIn} 1s;
  &:hover ${StyledImg} {
    transform: scale(1.03);
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  gap: 40px;
  justify-content: center;
`;

export const Description = styled.p`
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-around;
`;

export const ItemTitle = styled.p`
  font-weight: bold;
`;

export const StyledBtn = styled.button`
  background: var(--background-dark);
  color: ${(props) =>
    props.disabled ? "var(--btn-disabled)" : "var(--btn-primary)"};
  border: none;
  cursor: pointer;
  border-radius: 40px;
  transition: transform 250ms;
  &:hover {
    transform: translateY(-2px);
  }
  :active {
    transform: translateY(2px);
  }
`;

export const AddBtn = styled(StyledBtn)`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

export const RemoveBtn = styled(AddBtn)`
  color: var(--btn-remove);
`;

export const l3 = keyframes`

to{transform: rotate(.5turn)
`;

export const Loader = styled.div`
  width: 50px;
  --b: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #514b82;
  -webkit-mask:
    repeating-conic-gradient(#0000 0deg, #000 1deg 70deg, #0000 71deg 90deg),
    radial-gradient(
      farthest-side,
      #0000 calc(100% - var(--b) - 1px),
      #000 calc(100% - var(--b))
    );
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  animation: ${l3} 1s infinite;
`;
