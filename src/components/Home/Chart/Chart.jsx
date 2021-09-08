import { useSelector } from "react-redux";
import { Bar } from 'react-chartjs-2';

const Chart = () => {

  const storeData = useSelector(state => state);

  const { dataChart, optionPick } = storeData;

  const data = {
    labels: dataChart.labels,
    datasets: [
      {
        type: 'bar',
        label: 'Positive Cases',
        data: dataChart.values,
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
      {
        type: 'line',
        label: 'Death',
        borderColor: 'rgba(153, 102, 255, 0.2)',
        borderWidth: 5,
        fill: false,
        data: dataChart.valuesDeath,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <h2>{`Information of ${optionPick.selectOne}`}</h2>
      <Bar data={data} options={options} />
    </div>

  );
}

export default Chart;