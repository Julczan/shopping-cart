import styled, { keyframes } from "styled-components";
import { Link } from "react-router";

export const slideIn = keyframes`
  from{
    transform: translateY(-20px);
    opacity: 0;
    }
    to{
      transform: translateY(0);  
      opacity: 1;
    }
`;

export const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  justify-content: center;
  gap: 20px;
  transform: translateY;
  animation: ${slideIn} 1s;
`;

export const StyledLink = styled(Link)`
  color: var(--text-primary);
  font-weight: bold;
  border: 2px solid var(--btn-primary);
  padding: 10px 20px;
  border-radius: 5px;
  transition: transform 250ms;
  &:hover {
    transform: scale(1.03);
  }
  &:active {
    transform: scale(0.98);
  }
`;

export const Title = styled.h1`
  color: var(--text-primary);
  align-self: center;
`;

export const SubText = styled.p`
  color: var(--text-secondary);
`;

export const StyledSpan = styled.span`
  color: var(--text-primary);
  text-decoration: wavy underline var(--btn-primary);
  text-underline-offset: 3px;
`;
