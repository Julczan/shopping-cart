import styled from "styled-components";
import { Link } from "react-router";

export const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  justify-content: center;
  gap: 20px;
`;

export const StyledLink = styled(Link)`
  color: var(--text-primary);
  font-weight: bold;
  border: 2px solid var(--btn-primary);
  padding: 10px 20px;
  border-radius: 5px;
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
