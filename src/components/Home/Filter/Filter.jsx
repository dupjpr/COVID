import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { formActions, dataChartAction, statusOption } from '../homeActions';

const Filter = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const { data, status, statesEEUU, optionPick } = storeData;

  // selects config

  const states = Object.keys(statesEEUU);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    dispatch(formActions({ [name]: target.value }));
  }

  // data organization

  const dataProcess = states.map((item) => {

    const dataState = data.filter((element) => element.state === item);

    return dataState

  })

  // date config

  function dateFormat(dates) {

    const newDate = dates.map((item) => {

      const dateConf = [];

      item.toString().split('').forEach((element, idex) => {
        if (idex === 3 || idex === 5) {
          element = `${element}/`
        }
        dateConf.push(element)
      });

      return dateConf.join('')
    });

    return newDate;

  }

  // information filtering according to user selection

  useEffect(() => {

    if (optionPick.selectOne === 'All states' && optionPick.selectTwo !== 'All time') {

      const valuesChart = dataProcess.map((item) => item[0].positive);
      const valuesDeathsChart = dataProcess.map((item) => item[0].death);
      const labelChart = states.map((item) => statesEEUU[item]);

      dispatch(dataChartAction({
        labels: labelChart,
        values: valuesChart,
        valuesDeath: valuesDeathsChart
      }));

      dispatch(statusOption(true));
      dispatch(formActions({ selectTwo: 'All time' }));

    }

    if (optionPick.selectOne === 'All states' && optionPick.selectTwo === 'All time') {

      const valuesChart = dataProcess.map((item) => item[0].positive);
      const valuesDeathsChart = dataProcess.map((item) => item[0].death);
      const labelChart = states.map((item) => statesEEUU[item]);

      dispatch(dataChartAction({
        labels: labelChart,
        values: valuesChart,
        valuesDeath: valuesDeathsChart
      }));

      dispatch(statusOption(true));

    }

    if (optionPick.selectOne !== 'All states' && optionPick.selectTwo === 'All time') {

      const stateIdx = Object.values(statesEEUU).indexOf(optionPick.selectOne);
      const initials = states[stateIdx];

      const dataSet = dataProcess.filter((item) => item[0].state === initials);
      const valuesChart = dataSet[0].map((item) => item.positive);
      const valuesDeathsChart = dataSet[0].map((item) => item.death);
      const labelChart = dateFormat(dataSet[0].map((item) => item.date));

      dispatch(dataChartAction({
        labels: labelChart,
        values: valuesChart,
        valuesDeath: valuesDeathsChart
      }));

      dispatch(statusOption(false));

    }

    if (optionPick.selectOne !== 'All states' && optionPick.selectTwo !== 'All time') {

      const stateIdx = Object.values(statesEEUU).indexOf(optionPick.selectOne);
      const initials = states[stateIdx];

      const dataSet = dataProcess.filter((item) => item[0].state === initials);

      if (optionPick.selectTwo === "Last 7 days") {

        const dataFilter = dataSet[0].filter((item, idx) => idx <= 6);
        const valuesChart = dataFilter.map((item) => item.positive);
        const valuesDeathsChart = dataFilter.map((item) => item.death);
        const labelChart = dateFormat(dataFilter.map((item) => item.date));

        dispatch(dataChartAction({
          labels: labelChart,
          values: valuesChart,
          valuesDeath: valuesDeathsChart
        }));

        dispatch(statusOption(false));

      } else if (optionPick.selectTwo === "Last month") {

        const dataFilter = dataSet[0].filter((item, idx) => idx <= 29);
        const valuesChart = dataFilter.map((item) => item.positive);
        const valuesDeathsChart = dataFilter.map((item) => item.death);
        const labelChart = dateFormat(dataFilter.map((item) => item.date));

        dispatch(dataChartAction({
          labels: labelChart,
          values: valuesChart,
          valuesDeath: valuesDeathsChart
        }));
        
        dispatch(statusOption(false));

      }

    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionPick])

  console.log(storeData);

  return (
    <div>
      <select
        name="selectOne"
        value={optionPick.selectOne}
        onChange={(e) => handleChange(e)}
      >
        <option value="All states" key={uuidv4()}>All states</option>
        {states.map((item) => (
          <option value={statesEEUU[item]} key={uuidv4()}>{statesEEUU[item]}</option>
        ))}
      </select>

      <select
        name="selectTwo"
        value={optionPick.selectTwo}
        onChange={(e) => handleChange(e)}
      >
        <option key={uuidv4()} value="All time">All time</option>
        <option key={uuidv4()} disabled={status} value="Last 7 days">Last 7 days</option>
        <option key={uuidv4()} disabled={status} value="Last month">Last month</option>
      </select>
    </div>
  );
}

export default Filter;