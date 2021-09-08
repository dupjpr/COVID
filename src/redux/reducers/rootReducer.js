import {
  LOADING,
  GET_PROFILE,
  ERROR,
  OPTION_PICK,
  DATA_CHART,
  STATUS_TIME_OPTIONS, 
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
    case DATA_CHART:
      return {
        ...state,
        dataChart: action.payload
      }
    case STATUS_TIME_OPTIONS:
      return {
        ...state,
        status: action.payload
      }
    default:
      return state
  }
}

export default rootReducer;
