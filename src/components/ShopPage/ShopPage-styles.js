import styled from "styled-components";

export const ShopStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Card = styled.div`
  background: var(--background-dark);
  border: black solid 2px;
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  position: relative;
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-around;
`;

export const StyledImg = styled.img`
  height: 300px;
  width: 300px;
`;

export const StyledBtn = styled.button`
  background: var(--background-dark);
  color: ${(props) =>
    props.disabled ? "var(--btn-disabled)" : "var(--btn-primary)"};
  border: none;
`;

export const AddBtn = styled(StyledBtn)`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

export const RemoveBtn = styled(AddBtn)`
  color: var(--btn-remove);
`;
