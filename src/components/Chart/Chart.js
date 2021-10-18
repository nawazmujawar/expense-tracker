import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

export default function Chart(props) {
  const valueArray = props.dataPoints.map((datapoint) => datapoint.value);
  const maxVal = Math.max(...valueArray); // this make [1,2,3] to 1,2,3

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxVal}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
