import {
  GET_CAPTIONS,
  CLEAR_CAPTIONS,
  ADD_CAPTIONS,
  CREATE_CAPTION
} from "../../utils/constants";

const initialState = {
  captions: [],
  activeCaptions: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CAPTIONS:
      return {
        ...state,
        captions: action.payload
      };
    case ADD_CAPTIONS:
      return {
        ...state,
        activeCaptions: [...state.captions, ...action.payload]
      };
    case CREATE_CAPTION:
      return {
        ...state,
        captions: [...state.captions, action.payload]
      };
    case CLEAR_CAPTIONS:
      return {
        ...initialState
      };
    default:
      return state;
  }
};
