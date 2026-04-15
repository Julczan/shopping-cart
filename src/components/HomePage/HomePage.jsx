import {
  HomeStyled,
  StyledLink,
  StyledSpan,
  SubText,
  Title,
} from "./HomePage-styles";

function HomePage() {
  return (
    <HomeStyled>
      <Title>Give Me The Money</Title>
      <SubText>No need to ask any questions</SubText>
      <SubText>
        Just give me the <StyledSpan>money</StyledSpan>
      </SubText>
      <StyledLink to={"/shop"}>Spend Now</StyledLink>
    </HomeStyled>
  );
}

export default HomePage;
