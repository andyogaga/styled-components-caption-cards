import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import {
  Container,
  SearchSection,
  SearchInput,
  CaptionCard,
  CaptionsContainer,
  SearchButton,
  SearchWrapper,
  TagText,
  EmptyContentText
} from "../../components";
import styled from "styled-components";
import { shape, string, bool, func } from "prop-types";
import Loader from "../../components/Loader";
import { Formik } from "formik";
import * as Yup from "yup";

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

const AddTagContainer = styled(SearchSection)`
  padding-top: 8rem;
  padding-bottom: 8rem;
`;

const AddTagWrapper = styled(SearchWrapper)``;

const AddTagInput = styled(SearchInput)``;

const AddTagButton = styled(SearchButton)``;

const tagValidation = Yup.object().shape({
  tag: Yup.string()
    .required("Required!")
    .min(2, "You must have more than one letter")
});

const Tags = props => {
  const { tags, tagsLoading, createTagAlone } = props;
  const [addTagLoading, setAddTagLoading] = useState(false);

  return (
    <Container>
      <NavBar />
      <Formik
        initialValues={{
          tag: ""
        }}
        validationSchema={tagValidation}
        onSubmit={(values, { setSubmitting }) => {
          setAddTagLoading(true);
          createTagAlone(values.tag, () => {
            setSubmitting(false);
            setAddTagLoading(false);
          });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          isSubmitting,
          handleBlur
        }) => {
          return (
            <AddTagContainer>
              <AddTagWrapper>
                <AddTagInput
                  name="tag"
                  value={values.tag}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  type="text"
                  placeholder="Enter Tags to Add"
                />
                <AddTagButton type="submit" onClick={handleSubmit}>
                  {addTagLoading ? (
                    <Loader size="small" color="#fff" />
                  ) : (
                    "Add Tag"
                  )}
                </AddTagButton>
              </AddTagWrapper>
              {errors.tag &&
              touched.tag && ( // This is the error element to be shown if field is touched or does not pass the schema tests
                  <span
                    data-testid={`tag-error`}
                    style={{ fontSize: "0.9rem", color: "red", marginTop: '1rem' }}
                  >
                    {errors.tag}
                  </span>
                )}
            </AddTagContainer>
          );
        }}
      </Formik>

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
  tagsLoading: false,
  createTagAlone: () => {}
};

Tags.propTypes = {
  tags: shape([string]),
  tagsLoading: bool,
  createTagAlone: func
};

export default Tags;
