import React, { useState } from "react";
import { shape, string, func } from "prop-types";
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
  TagsContainer,
  TagText,
  EmptyContentText
} from "../../components";
import NavBar from "../../components/NavBar";
import Loader from "../../components/Loader";

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
            {captionsLoading ? <Loader size="small" color="#fff" /> : "Search"}
          </SearchButton>
        </SearchWrapper>
        <TagsContainer>
          {activeTags && activeTags.length
            ? activeTags.map((tag, i) => (
                <TagCard key={i}>
                  <TagText>{tag}</TagText>
                </TagCard>
              ))
            : null}
        </TagsContainer>
      </SearchSection>
      <CaptionsContainer>
        {Array.isArray(captions) && captions.length ? (
          captions.slice(0, 16).map(caption => (
            <CaptionCard key={caption.id}>
              {caption.tag ? (
                <CaptionCardHeader>{caption.tag}</CaptionCardHeader>
              ) : null}
              {caption.caption ? (
                <CaptionText>{caption.caption}</CaptionText>
              ) : null}
            </CaptionCard>
          ))
        ) : (
          <EmptyContentText>Please Search Above</EmptyContentText>
        )}
      </CaptionsContainer>
    </Container>
  );
};

Home.defaultProps = {
  activeTags: [],
  captions: {
    tag: "",
    caption: ""
  },
  getSearchedCaptions: () => {}
};

Home.propTypes = {
  activeTags: shape([string]),
  captions: shape({
    tag: string,
    caption: string
  }),
  getSearchedCaptions: func
};

export default Home;
