import React from 'react';
import Chart from "react-google-charts";
const chartColors = [
    "#54ff52",
    "#52e2ff",
    "#5294ff",
    "#ffbf52",
    "#ff6e52",
    "#d085ff",
  ];
  const barChart2Data = [
    ["City", "Tesla", "Facebook"],
    ["02/01/2022", 8175000, 8008000],
    ["02/08/2022", 3792000, 3694000],
    ["02/15/2022", 2695000, 2896000],
    ["02/22/2022", 2099000, 1953000],
    ["02/29/2022", 1526000, 1517000],
  ];
  const lineChartData = [
    ["x", "Tesla", "Facebook"],
    [0, 0, 0],
    [1, 10, 5],
    [2, 23, 15],
    [3, 17, 9],
    [4, 18, 10],
    [5, 9, 5],
    [6, 11, 3],
    [7, 27, 19],
  ];
  const barChartData = [
      ["Year", "Sales", "Expenses", "Profit"],
      ["2014", 1000, 400, 200],
      ["2015", 1170, 460, 250],
      ["2016", 660, 1120, 300],
      ["2017", 1030, 540, 350],
      ["2014", 1000, 400, 200],
      ["2015", 1170, 460, 250],
      ["2016", 660, 1120, 300],
      ["2017", 1030, 540, 350],
    ];
  const pieChartData = [
    ["Stock", "Total Invested"],
    ["Tesla", 11],
    ["Facebook", 5],
    ["Amazon", 3],
    ["SONY", 2],
    ["Microsoft", 7],
    ["Apple", 2],
  ];
  const comboChartData = [
    ["Month", "Tesla", "Facebook", "Amazon", "SONY", "Microsoft", "Average"],
    ["2004/05", 165, 938, 522, 998, 450, 614.6],
    ["2005/06", 135, 1120, 599, 1268, 288, 682],
    ["2006/07", 157, 1167, 587, 807, 397, 623],
    ["2007/08", 139, 1110, 615, 968, 215, 609.4],
  ];
  const geoChartData = [
    ["Country", "Revenue from Country"],
    ["Germany", 1234799],
    ["United States", 2355664],
    ["Brazil", 4507000],
    ["Canada", 1200000],
    ["France", 6480500],
    ["RU", 7800045],
  ];

export const GeoChart = () => (
    <Chart
        options={{
            colors: chartColors,
        }}
        chartEvents={[
            {
            eventName: "select",
            callback: ({ chartWrapper }) => {
                const chart = chartWrapper.getChart();
                const selection = chart.getSelection();
                if (selection.length === 0) return;
                const region = geoChartData[selection[0].row + 1];
                console.log("Selected : " + region);
            },
            },
        ]}
        chartType="GeoChart"
        width="100%"
        height="240px"
        data={geoChartData}
    />
);
export const ComboChart = () => (
    <Chart
        chartType="ComboChart"
        width="100%"
        height="240px"
        data={comboChartData}
        options={{
            colors: chartColors,
            title: "Monthly Stock Performance with Average",
            vAxis: { title: "Cups" },
            hAxis: { title: "Month" },
            seriesType: "bars",
            series: { 5: { type: "line" } },
        }}
    />
);
export const PieChart = () => (
    <Chart
        chartType="PieChart"
        data={pieChartData}
        options={{
            colors: chartColors,
            title: "Percent Invested per Stock",
            legend: "none",
            pieSliceText: "label",
            slices: {
            4: { offset: 0.2 },
            2: { offset: 0.4 },
            },
        }}
        width={"100%"}
        height={"240px"}
    />
);
export const BarChart = () => (
    <Chart
        className="chart"
        chartType="Bar"
        width={"100%"}
        height={"240px"}
        data={barChartData}
        options={{
            colors: chartColors,
            chart: {
            title: "Facebook Performance",
            subtitle: "Sales, Expenses, and Profit: 2014-2017",
            },
        }}
    />
);
export const LineChart = () => (
    <Chart
        className="chart"
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={lineChartData}
        width={"100%"}
        height={"240px"}
        options={{
            hAxis: {
            title: "Time",
            },
            vAxis: {
            title: "Popularity",
            },
            series: {
            1: { curveType: "function" },
            },
            colors: chartColors,
        }}
        rootProps={{ "data-testid": "2" }}
    />
);
export const BarChart2 = () => (
    <Chart
        className="chart"
        chartType="BarChart"
        loader={<div>Overtime Comparison</div>}
        data={barChart2Data}
        width={"100%"}
        height={"240px"}
        options={{
            title: "Overtime Investment Comparison",
            chartArea: { width: "50%" },
            isStacked: true,
            hAxis: {
            title: "Investment Total",
            minValue: 0,
            },
            vAxis: {
            title: "Week of",
            },
            colors: chartColors,
        }}
        // For tests
        rootProps={{ "data-testid": "3" }}
    />
);