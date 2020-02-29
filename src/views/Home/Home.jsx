import React from "react";
import {
  Container,
  SearchSection,
  SearchInput,
  CaptionCard,
  CaptionsContainer,
  CaptionText,
  CaptionCardHeader,
  SearchButton,
  SearchWrapper
} from "../../components";
import NavBar from "../../components/NavBar";

const Home = () => {
  const arr = [1, 2, 3, 4, 5, 4, 3, 3, 3, 3, 3, 3, 4, 4, 4];
  return (
    <Container>
      <NavBar />
      <SearchSection>
        <SearchWrapper>
          <SearchInput placeholder="Enter Tags to Search" />
          <SearchButton>Search</SearchButton>
        </SearchWrapper>
      </SearchSection>
      <CaptionsContainer>
        {arr.map(a => (
          <CaptionCard key={a}>
            <CaptionCardHeader>tag</CaptionCardHeader>
            <CaptionText>
              This is my tag and i cannot shout oo This is my tag and i cannot
              shout oov This is my tag and i cannot shout oo
            </CaptionText>
          </CaptionCard>
        ))}
      </CaptionsContainer>
    </Container>
  );
};

export default Home;
