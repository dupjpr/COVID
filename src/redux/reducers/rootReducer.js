import {
  LOADING,
  GET_PROFILE,
  ERROR,
  OPTION_PICK
} from '../../utilities/constants';

const rootReducer = (state, action) => {

  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case GET_PROFILE:
      return {
        ...state,
        data: action.payload
      }
    case ERROR:
      return {
        ...state,
        error: action.payload
      }
    case OPTION_PICK:
      return {
        ...state,
        optionPick: { ...state.optionPick, ...action.payload }
      }
    default:
      return state
  }
}

export default rootReducer;
