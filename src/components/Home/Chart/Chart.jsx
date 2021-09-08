import { useSelector } from "react-redux";
import { Bar } from 'react-chartjs-2';

const Chart = () => {

  const storeData = useSelector(state => state);

  const { dataChart } = storeData;

  const data = {
    labels: dataChart.labels,
    datasets: [
      {
        type: 'bar',
        label: 'Positive Cases',
        data: dataChart.values,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
      {
        type: 'line',
        label: 'Death',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2,
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

    <Bar data={data} options={options} />

  );
}

export default Chart;