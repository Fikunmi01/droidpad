import { Chart } from "react-google-charts";

export const data = [
  ["Element", "", { role: "style" }],
  ["Health", 30.93, "#0C5A04"],
  ["Travelling", 27.63, "#2E9000"], // English color name
  ["Food", 58.53, "#65EE24"], // RGB value
];

export function ColumnChart() {
  return (
    <Chart chartType="ColumnChart" width="100%" height="250px"  data={data} />
  );
}
