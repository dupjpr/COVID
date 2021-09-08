import { useSelector } from "react-redux";

const Overview = () => {

  const storeData = useSelector(state => state);

  const { data, statesEEUU } = storeData;

  const states = Object.keys(statesEEUU);

  // data organization

  const dataProcess = states.map((item) => {

    const dataState = data.filter((element) => element.state === item);

    return dataState

  })

  // total calculation

  function sumValues(values) {

    let sum = 0;

    values.forEach(element => {
      sum += element
    });

    return sum

  }

  const infoTotalPositive = dataProcess.map((item) => item[0].positive);
  const infoTotalDeaths = dataProcess.map((item) => item[0].death);

  const totalPositive = new Intl.NumberFormat().format(sumValues(infoTotalPositive));
  const totalDeaths = new Intl.NumberFormat().format(sumValues(infoTotalDeaths));

  return (
    <div>
      <h2>General Information EEUU</h2>
      <div>
        <h3>Positive Cases:</h3>
        <div>{totalPositive}</div>
      </div>
      <div>
        <h3>Deaths:</h3>
        <div>{totalDeaths}</div>
      </div>
    </div>
  );
}

export default Overview;