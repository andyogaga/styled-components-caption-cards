import {
  GET_TAGS,
  CLEAR_TAGS,
  ADD_TAG,
  REMOVE_TAG,
  CLEAR_ACTIVE_TAGS,
  CREATE_TAG
} from "../../utils/constants";

const initialState = {
  tags: [],
  activeTags: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TAGS:
      return {
        ...state,
        tags: action.payload
      };
    case CLEAR_TAGS:
      return {
        ...state,
        tags: []
      };
    case CLEAR_ACTIVE_TAGS:
      return {
        ...state,
        activeTags: []
      };
    case ADD_TAG:
      return {
        ...state,
        activeTags: [...state.activeTags, action.payload]
      };
    case CREATE_TAG:
      return {
        ...state,
        tags: [action.payload, ...state.tags]
      };
    case REMOVE_TAG:
      return {
        ...state,
        activeTags: state.activeTags.filter(tag => tag !== action.payload)
      };
    default:
      return state;
  }
};
