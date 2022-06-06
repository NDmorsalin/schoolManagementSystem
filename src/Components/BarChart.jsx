import React from 'react';
import { Bar } from 'react-chartjs-2';
import {Ch} from 'chart.js'

function BarChart() {
  const option = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart'
      }
    }
  };
  const data = {
    labels: 'Test Labels',
    datasets: [
      {
        label: 'Fully Rounded',
        data: 122,
        borderColor: 'red',
        backgroundColor: 'green',
        borderWidth: 2,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false
      },
      {
        data: 356,
        label: 'Categorias',
        backgroundColor: 'rgba(26, 179, 148, 0.4)',
        borderColor: 'rgba(26, 179, 148, 1)',
        borderWidth: 2
      }
    ]
  };
  return <Bar options={option} data={data} />;
}

export default BarChart;
