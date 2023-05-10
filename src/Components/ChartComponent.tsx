import React from "react";
import { Doughnut } from "react-chartjs-2";
import Chart, { ChartData } from "chart.js/auto";

interface ChartProps {
  activeCases: number;
  recoveredCases: number;
  deathCases: number;
}

interface ChartDataInterface {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    fill: boolean;
  }[];
}

// interface ChartProps {
//   chartData: ChartData;
// }
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const ChartComponent: React.FC<ChartProps> = ({
  activeCases,
  recoveredCases,
  deathCases,
}) => {
  const data = {
    labels: ["Active Cases", "Recovered Cases", "Deaths Cases"],
    datasets: [
      {
        label: "COVID-19 Cases in India",
        data: [activeCases, recoveredCases, deathCases],
        backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe"],
        hoverBackgroundColor: ["#ff6384", "#36a2eb", "#cc65fe"],
      },
    ],
  };
  const d = new Date();
  let m = monthNames[d.getMonth()];
  const [chartData, setChartData] = React.useState<ChartDataInterface>({
    labels: ["March"],
    datasets: [
      {
        label: "Active Cases",
        data: [activeCases],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        fill: false,
      },
      {
        label: "Recovered Cases",
        data: [recoveredCases],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        fill: false,
      },
      {
        label: "Deaths Cases",
        data: [deathCases],
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
        fill: false,
      },
    ],
  });

  React.useEffect(() => {
    const ctx = document.getElementById("myChart") as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: "bar",
      data: chartData,
    });
    return () => {
      myChart.destroy();
    };
  }, [chartData]);

  return <canvas id="myChart" width={400} height={400} />;
};

export default ChartComponent;
