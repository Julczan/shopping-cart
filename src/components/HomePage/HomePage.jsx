import { HomeStyled, StyledSpan, SubText, Title } from "./HomePage-styles";

function HomePage() {
  return (
    <HomeStyled>
      <Title>Give Me The Money</Title>
      <SubText>No need to ask any questions</SubText>
      <SubText>
        Just give me the <StyledSpan>money</StyledSpan>
      </SubText>
    </HomeStyled>
  );
}

export default HomePage;
