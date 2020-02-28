import { GET_ACTIVE_TAGS, CLEAR_TAGS, ADD_TAG, REMOVE_TAG } from "../../utils/constants";


const initialState = {
  tags: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ACTIVE_TAGS:
      return {
        ...state,
        tags: action.payload
      };
    case CLEAR_TAGS:
      return {
        ...initialState
      };
    case ADD_TAG:
        return {
          ...state,
          tags: state.tags.concat(action.payload)
        };
    case REMOVE_TAG:
      return {
        ...state,
        tags: state.tags.filter(tag => tag !== action.payload)
      }
    default:
      return state;
  }
};