import styled from "styled-components";

export const Navigation = styled.nav`
  color: white;
  min-height: 60px;
  background: var(--background-dark);
  justify-content: space-around;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  padding: 0 10px;
  position: sticky;
  top: 0px;
  z-index: 1;
`;

export const Button = styled.button`
  background: grey;
  padding: 10px 20px;
`;

export const Logo = styled.h1`
  color: var(--text);
`;

export const NavLinks = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
`;

export const CartQty = styled.div`
  position: absolute;
  right: -20px;
  top: -10px;
  width: 20px;
  height: 20px;
  text-align: center;
  background: var(--btn-remove);
  border-radius: 50%;
`;
