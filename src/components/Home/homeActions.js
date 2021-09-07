import {
  OPTION_PICK
} from '../../utilities/constants.js';

const actions = {
  pickOption: (data) => ({
    type: OPTION_PICK,
    payload: data
  })
}

const { pickOption } = actions;

const homeActions = (formInput) => {
  return dispatch => {
    dispatch(pickOption(formInput));
  }
}

export { homeActions };
