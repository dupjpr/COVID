import {
  OPTION_PICK,
  DATA_CHART,
  STATUS_TIME_OPTIONS,
} from '../../utilities/constants.js';

const actions = {
  pickOption: (data) => ({
    type: OPTION_PICK,
    payload: data
  }),
  dataChart: (data) => ({
    type: DATA_CHART,
    payload: data
  }),
  statusTime: (data) => ({
    type: STATUS_TIME_OPTIONS,
    payload: data
  })
}

const { pickOption, dataChart, statusTime } = actions;

const formActions = (inputForm) => {
  return dispatch => {
    dispatch(pickOption(inputForm));
  }
}

const dataChartAction = (chartData) => {
  return dispatch => {
    dispatch(dataChart(chartData));
  }
}

const statusOption = (status) => {
  return dispatch => {
    dispatch(statusTime(status));
  }
}

export { formActions, dataChartAction, statusOption };
