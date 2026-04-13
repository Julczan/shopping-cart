import styled from "styled-components";

export const Navigation = styled.nav`
  color: white;
  min-height: 60px;
  background: var(--background);
  color: var(--text);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  background: grey;
  padding: 10px 20px;
`;

export const Logo = styled.h1`
  color: var(--text);
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;
