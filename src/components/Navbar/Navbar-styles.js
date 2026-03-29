import styled from "styled-components";

export const Test = styled.nav`
  background: ${(props) => (props.$primary ? "#BF4F74" : "black")};
  color: white;
  min-height: 60px;
`;
