import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

let color = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
];

function LineGraph({ days, data1, data2, data1label, data2label }) {
  return (
    <div>
      <Line
        data={{
          labels: days,
          datasets: [
            {
              label: data1label,
              data: data1,
              borderColor: color,
              borderWidth: 1,
            },
            {
              label: data2label,
              data: data2,
              // backgroundColor: [
              //   "rgba(255, 99, 132, 0.2)",
              //   "rgba(54, 162, 235, 0.2)",
              //   "rgba(255, 206, 86, 0.2)",
              //   "rgba(75, 192, 192, 0.2)",
              //   "rgba(153, 102, 255, 0.2)",
              //   "rgba(255, 159, 64, 0.2)",
              // ],
              borderColor: color,
              borderWidth: 1,
            },
          ],
        }}
        options={{
          maintainAspectRation: false,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                font: {
                  size: 15,
                },
              },
            },
            x: {
              ticks: {
                font: {
                  size: 15,
                },
              },
            },
            ticks: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}

export default LineGraph;
