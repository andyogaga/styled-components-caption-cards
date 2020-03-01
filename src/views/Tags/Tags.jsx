import React from "react";
import NavBar from "../../components/NavBar";
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
  TagsContainer,
  TagText,
  EmptyContentText
} from "../../components";
import styled from "styled-components";
import { shape, string, bool } from "prop-types";
import Loader from "../../components/Loader";

const TagCard = styled(CaptionCard)`
  height: auto;
  min-height: 6rem;
`;
const TagWrite = styled(TagText)`
  color: #000;
  margin: auto;

  &:first-letter {
    text-transform: uppercase;
  }
`;

const MyTagContainer = styled(CaptionsContainer)`
  margin: auto;
`;

const Tags = props => {
  const { tags, tagsLoading } = props;
  return (
    <Container>
      <NavBar />
      {tagsLoading ? (
        <Loader size="small" />
      ) : (
        <MyTagContainer>
          {Array.isArray(tags) && tags.length ? (
            tags.map((tag, i) => (
              <TagCard key={i}>
                <TagWrite>{tag}</TagWrite>
              </TagCard>
            ))
          ) : (
            <EmptyContentText>No Tags Yet</EmptyContentText>
          )}
        </MyTagContainer>
      )}
    </Container>
  );
};

Tags.defaultProps = {
  tags: [],
  tagsLoading: false
}

Tags.propTypes = {
  tags: shape([string]),
  tagsLoading: bool
};

export default Tags;
