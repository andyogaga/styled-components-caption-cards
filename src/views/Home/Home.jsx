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

const Home = props => {
  const { captions } = props;
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
        {captions.map(caption => (
          <CaptionCard key={caption.id}>
            {caption.tag ? (
              <CaptionCardHeader>{caption.tag}</CaptionCardHeader>
            ) : null}
            {caption.caption ? (
              <CaptionText>{caption.caption}</CaptionText>
            ) : null}
          </CaptionCard>
        ))}
      </CaptionsContainer>
    </Container>
  );
};

export default Home;
