import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Home from "./Home";
import {
  getCaptions,
  getCaptionByTagId,
  clearCaptions
} from "../../store/actions/caption.actions";
import { clearActiveTags } from "../../store/actions/tag.actions";
import { func, shape, string } from "prop-types";

const HomeContainer = props => {
  const [isLoading, setIsLoading] = useState(true);
  const {
    getCaptions,
    getCaptionByTagId,
    captions,
    activeTags,
    clearActiveTags,
    clearCaptions
  } = props;

  useEffect(() => {
    getCaptions(() => setIsLoading(true));
    return () => {
      clearActiveTags();
      clearCaptions();
    };
  }, []);

  const getSearchedCaptions = cb => {
    // Choose a random number from 1 to 10
    const randomId = Math.floor(Math.random() * 9) + 1;
    getCaptionByTagId(randomId, cb);
  };

  return (
    <Home
      isLoading={isLoading}
      captions={captions}
      activeTags={activeTags}
      getSearchedCaptions={getSearchedCaptions}
    />
  );
};

const mapStateToProps = state => ({
  captions: state.captions.captions,
  activeTags: state.tags.activeTags
});

HomeContainer.defaultProps = {
  getCaptionByTagId: () => {},
  getCaptions: () => {},
  clearActiveTags: () => {},
  clearCaptions: () => {},
  captions: [],
  activeTags: []
}

HomeContainer.propTypes = {
  getCaptions: func,
  getCaptionByTagId: func,
  clearActiveTags: func,
  clearCaptions: func,
  captions: shape([shape({})]),
  activeTags: shape([string])
}

export default connect(mapStateToProps, {
  getCaptions,
  getCaptionByTagId,
  clearActiveTags,
  clearCaptions
})(HomeContainer);
