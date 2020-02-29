import React, { useState } from "react";
import {
  Container,
  SearchSection,
  SearchInput,
  CaptionCard,
  CaptionsContainer,
  CaptionText,
  CaptionCardHeader,
  SearchButton,
  SearchWrapper,
  TagCard,
  TagsContainer
} from "../../components";
import NavBar from "../../components/NavBar";

const Home = props => {
  const { captions, getSearchedCaptions, activeTags } = props;
  const [captionsLoading, setCaptionsLoading] = useState(false);
  return (
    <Container>
      <NavBar />
      <SearchSection>
        <SearchWrapper>
          <SearchInput placeholder="Enter Tags to Search" />
          <SearchButton
            onClick={() => {
              setCaptionsLoading(true);
              getSearchedCaptions(() => setCaptionsLoading(false));
            }}
          >
            {captionsLoading ? "Loading" : "Search"}
          </SearchButton>
        </SearchWrapper>
        <TagsContainer>
          {activeTags && activeTags.length
            ? activeTags.map(tag => <TagCard>{tag}</TagCard>)
            : null}
        </TagsContainer>
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
