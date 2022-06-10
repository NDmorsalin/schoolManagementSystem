import React from 'react';
import Chart from 'react-apexcharts';

function BarChart() {
  const options = {
    chart: {
      type: 'bar',
      height: 350
    },

    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
        colors: {
          ranges: [
            {
              from: 0,
              to: 46,
              color: '#F15B46'
            },
            {
              from: 45,
              to: 100,
              color: '#FEB019'
            }
          ]
        },
        dataLabels: {
          position: 'top' // top, center, bottom
        }
      }
    },
    dataLabels: {
      enabled: true
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Collection', 'Fees', 'Expense']
    },
    yaxis: {
      title: {
        text: '$ (Total)'
      }
    },
    legend: {
      position: 'left',
      horizontalAlign: 'center'
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return `$ ${val} thousands`;
        }
      }
    }
  };

  return (
    <Chart
      type="bar"
      width="100%"
      height={200}
      series={[
        {
          data: [8, 90, 70]
        }
      ]}
      options={options}
    />
  );
}

export default BarChart;
