import styled from "styled-components";

export const Navigation = styled.nav`
  color: white;
  min-height: 60px;
  background: var(--background-dark);
  color: var(--text-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
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
