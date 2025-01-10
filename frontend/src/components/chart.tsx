import React from "react";
import { Bar } from "react-chartjs-2";
import { Bardata } from "./BarData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarGraph: React.FC = () => {
  const options = {
    scales: {
      
      x: {
        ticks: {
          color: "white", 
        },
        grid: {
          display: false, 
          color: 'rgba(255, 255, 255, 1)'
        },
      },
      y: {
        ticks: {
          color: "white",
        },
        grid: {
          display: false,
          color: 'rgba(255, 255, 255, 1)'
        },
      },
    },
  };
  const data = Bardata();

  return (
    <div  className="h-full bg-stone-800 border border-gray-700 rounded-lg pl-2 pr-2 shadow transition-all duration-200 hover:bg-stone-900 hover:scale-105 hover:border-cyan-300 hover:shadow-cyan-400">
      <Bar options={options} data={data}/>
    </div>
  );
};
