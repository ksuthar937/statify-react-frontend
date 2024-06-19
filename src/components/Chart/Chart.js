import React, { useEffect, useState } from "react";

import styles from "./Chart.module.css";

import axios from "axios";

import { API_URL } from "../../config";
import { BarChart, Bar, XAxis, YAxis } from "recharts";
import { transformData } from "../../utils/helper";

const initialData = [
  {
    name: "0-100",
    value: 0,
  },
  {
    name: "101-200",
    value: 0,
  },
  {
    name: "201-300",
    value: 0,
  },
  {
    name: "301-400",
    value: 0,
  },
  {
    name: "401-500",
    value: 0,
  },
  {
    name: "501-600",
    value: 0,
  },
  {
    name: "601-700",
    value: 0,
  },
  {
    name: "701-800",
    value: 0,
  },
  {
    name: "801-900",
    value: 0,
  },
  {
    name: "901-above",
    value: 0,
  },
];

const Chart = ({ month }) => {
  const [chartStats, setChartStats] = useState(initialData);

  useEffect(() => {
    fetchChartStats(month);
  }, [month]);

  const fetchChartStats = async (month) => {
    try {
      const response = await axios(`${API_URL}/chart/bar?month=${month}`);
      setChartStats(transformData(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1>Bar Chart Stats - {month}</h1>
      <BarChart
        width={350}
        height={250}
        data={chartStats}
        margin={{
          top: 15,
          bottom: 55,
        }}
      >
        <XAxis dataKey="name" angle={-90} textAnchor="end" />
        <YAxis dataKey="value" />
        <Bar dataKey="value" fill="var(--color-secondary2)" />
      </BarChart>
    </div>
  );
};

export default Chart;
