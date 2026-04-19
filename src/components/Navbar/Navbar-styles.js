import styled, { keyframes } from "styled-components";
import { Link } from "react-router";

export const popUp = keyframes`
  from{
    transform: translateY(-20px);
    opacity: 0;
    }
    to{
      transform: translateY(0);  
      opacity: 1;
    `;

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

export const Logo = styled(Link)`
  color: var(--text);
  font-size: 2rem;
  font-weight: bold;
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
  animation: ${popUp} 250ms;
`;

export const NavLink = styled(Link)`
  text-decoration: underline 0.15em rgb(27, 153, 139, 0);
  transition: text-decoration-color 300ms;
  text-underline-offset: 3px;
  &:hover {
    text-decoration-color: rgb(27, 153, 139, 1);
  }
`;
