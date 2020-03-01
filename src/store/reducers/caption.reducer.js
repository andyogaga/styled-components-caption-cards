import { GET_CAPTIONS, CLEAR_CAPTIONS, ADD_CAPTIONS } from "../../utils/constants";


const initialState = {
  captions: [],
  activeCaptions: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CAPTIONS:
      return {
        ...state,
        captions: action.payload
      };
    case ADD_CAPTIONS:
      console.log(action.payload)
        return {
          ...state,
          activeCaptions: [...state.captions, ...action.payload]
        };
    case CLEAR_CAPTIONS:
      return {
        ...initialState
      };
    default:
      return state;
  }
};