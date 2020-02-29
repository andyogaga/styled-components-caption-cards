import { GET_CAPTIONS, CLEAR_CAPTIONS } from "../../utils/constants";


const initialState = {
  captions: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CAPTIONS:
      return {
        ...state,
        captions: action.payload
      };
    case CLEAR_CAPTIONS:
      return {
        ...initialState
      };
    default:
      return state;
  }
};