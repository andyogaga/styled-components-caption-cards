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
  TagText
} from "../../components";
import styled from "styled-components";
import { shape, string } from "prop-types";

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
`

const Tags = props => {
  const { tags } = props;
  return (
    <Container>
      <NavBar />
      <MyTagContainer>
        {Array.isArray(tags) && tags.length
          ? tags.map((tag, i) => (
              <TagCard key={i}>
                <TagWrite>{tag}</TagWrite>
              </TagCard>
            ))
          : null}
      </MyTagContainer>
    </Container>
  );
};

Tags.propTypes = {
  tags: shape([string]),
}

export default Tags;
