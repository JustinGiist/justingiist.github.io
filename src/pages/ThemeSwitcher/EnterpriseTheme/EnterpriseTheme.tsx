import { Component } from "react";
import Chart from "react-google-charts";
import { GlobalThemes } from "../../../ThemeManager";
import stockProfile from "../../../assets/stockProfile.jpeg";
import news1 from "../../../assets/news1.jpg";
import news2 from "../../../assets/news2.jpg";
import news3 from "../../../assets/news3.png";
import "./EnterpriseTheme.scss";
import TutorialControl from "../../../components/TutorialComponent/TutorialControl";
import Icon from "../../../components/Icon/Icon";
const TeslaLogo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="80"
    height="80"
    viewBox="0 0 345.859 500"
  >
    <g fill="#fff">
      <path d="M266.601 403.28v21.912h7.027v-14.589h25.575v14.589h7.022v-21.874l-39.624-.038M272.845 396.192h27.02c3.753-.746 6.544-4.059 7.331-7.263h-41.681c.779 3.206 3.611 6.517 7.33 7.263" />
    </g>
    <path
      d="M245.319 425.206c3.543-1.502 5.449-4.1 6.18-7.141h-31.518l.021-29.117-7.065.02v36.238h32.382M160.398 396.094h24.954c3.762-1.093 6.921-3.959 7.691-7.136h-39.641v21.415h32.444v7.515l-25.449.021c-3.988 1.112-7.37 3.79-9.057 7.327l2.062-.038h39.415v-21.944h-32.42v-7.16"
      fill="#fff"
    />
    <g fill="#fff">
      <path d="M98.795 396.163h27.011c3.758-.749 6.551-4.059 7.334-7.266H91.461c.778 3.207 3.612 6.517 7.334 7.266M98.795 410.485h27.011c3.758-.741 6.551-4.054 7.334-7.263H91.461c.778 3.211 3.612 6.522 7.334 7.263M98.795 425.202h27.011c3.758-.747 6.551-4.059 7.334-7.264H91.461c.778 3.208 3.612 6.517 7.334 7.264" />
    </g>
    <path
      d="M28.524 388.986c.812 3.167 3.555 6.403 7.316 7.215h11.37l.58.229v28.691h7.1V396.43l.646-.229h11.38c3.804-.98 6.486-4.048 7.284-7.215v-.07H28.524v.07"
      fill="#fff"
    />
    <g fill="#fff">
      <path d="M173.146 317.299l35.477-199.519c33.814 0 44.48 3.708 46.021 18.843 0 0 22.685-8.458 34.125-25.636-44.646-20.688-89.505-21.621-89.505-21.621l-26.176 31.882.059-.004-26.177-31.883s-44.86.934-89.5 21.622c11.431 17.178 34.124 25.636 34.124 25.636 1.549-15.136 12.202-18.844 45.79-18.868l35.762 199.548" />
      <path d="M173.132 80.157c36.09-.276 77.398 5.583 119.687 24.014 5.652-10.173 7.105-14.669 7.105-14.669-46.228-18.289-89.519-24.548-126.797-24.705-37.277.157-80.566 6.417-126.787 24.705 0 0 2.062 5.538 7.1 14.669 42.28-18.431 83.597-24.29 119.688-24.014h.004" />
    </g>
  </svg>
);
const AmazonLogo = (
  <svg
    height="32"
    viewBox="163.5 263.1 285 85.8"
    width="80"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-rule="evenodd" fill-rule="evenodd">
      <path d="m340.3 330.2c-16.5 12.2-40.5 18.7-61.2 18.7-29 0-55-10.7-74.8-28.5-1.5-1.4-.2-3.3 1.7-2.2 21.3 12.4 47.6 19.8 74.8 19.8 18.3 0 38.5-3.8 57.1-11.7 2.8-1.1 5.1 1.9 2.4 3.9z" />
      <path d="m347.2 322.3c-2.1-2.7-14-1.3-19.3-.6-1.6.2-1.9-1.2-.4-2.2 9.5-6.7 25-4.7 26.8-2.5s-.5 17.8-9.4 25.2c-1.4 1.1-2.7.5-2.1-1 2-5 6.5-16.1 4.4-18.9z" />
      <path d="m328.2 272.5v-6.5c0-1 .7-1.6 1.6-1.6h29c.9 0 1.7.7 1.7 1.6v5.5c0 .9-.8 2.1-2.2 4.1l-15 21.4c5.6-.1 11.5.7 16.5 3.5 1.1.6 1.4 1.6 1.5 2.5v6.9c0 1-1 2.1-2.1 1.5-8.9-4.7-20.8-5.2-30.6.1-1 .5-2.1-.5-2.1-1.5v-6.6c0-1 0-2.8 1.1-4.4l17.4-24.9h-15.1c-.9 0-1.7-.7-1.7-1.6zm-105.7 40.3h-8.8c-.8-.1-1.5-.7-1.6-1.5v-45.2c0-.9.8-1.6 1.7-1.6h8.2c.9 0 1.5.7 1.6 1.5v5.9h.2c2.1-5.7 6.2-8.4 11.6-8.4 5.5 0 9 2.7 11.4 8.4 2.1-5.7 7-8.4 12.2-8.4 3.7 0 7.7 1.5 10.2 5 2.8 3.8 2.2 9.3 2.2 14.2v28.6c0 .9-.8 1.6-1.7 1.6h-8.7c-.9-.1-1.6-.8-1.6-1.6v-24c0-1.9.2-6.7-.2-8.5-.7-3-2.6-3.9-5.2-3.9-2.1 0-4.4 1.4-5.3 3.7s-.8 6.1-.8 8.7v24c0 .9-.8 1.6-1.7 1.6h-8.8c-.9-.1-1.6-.8-1.6-1.6v-24c0-5 .8-12.5-5.4-12.5-6.3 0-6.1 7.2-6.1 12.5v24c-.1.8-.8 1.5-1.8 1.5zm163-49.3c13.1 0 20.2 11.2 20.2 25.5 0 13.8-7.8 24.8-20.2 24.8-12.8 0-19.8-11.2-19.8-25.2-.1-14.1 7-25.1 19.8-25.1zm0 9.3c-6.5 0-6.9 8.9-6.9 14.4s-.1 17.3 6.8 17.3c6.8 0 7.2-9.5 7.2-15.3 0-3.8-.2-8.4-1.3-12-1-3.2-3-4.4-5.8-4.4zm37.1 40h-8.8c-.9-.1-1.6-.8-1.6-1.6v-45.3c.1-.8.8-1.5 1.7-1.5h8.2c.8 0 1.4.6 1.6 1.3v6.9h.2c2.5-6.2 5.9-9.1 12-9.1 3.9 0 7.8 1.4 10.3 5.3 2.3 3.6 2.3 9.7 2.3 14.1v28.5c-.1.8-.8 1.4-1.7 1.4h-8.8c-.8-.1-1.5-.7-1.6-1.4v-24.6c0-5 .6-12.2-5.5-12.2-2.1 0-4.1 1.4-5.1 3.6-1.2 2.8-1.4 5.5-1.4 8.6v24.4c-.1.9-.9 1.6-1.8 1.6zm-117.5-21.6c0 3.4.1 6.3-1.6 9.4-1.4 2.5-3.6 4-6.1 4-3.4 0-5.4-2.6-5.4-6.4 0-7.5 6.7-8.9 13.1-8.9zm8.9 21.5c-.6.5-1.4.6-2.1.2-2.9-2.4-3.5-3.6-5.1-5.9-4.8 4.9-8.3 6.4-14.5 6.4-7.4 0-13.2-4.6-13.2-13.7 0-7.2 3.9-12 9.4-14.4 4.8-2.1 11.5-2.5 16.6-3.1v-1.1c0-2.1.2-4.6-1.1-6.4-1.1-1.6-3.1-2.3-4.9-2.3-3.4 0-6.4 1.7-7.1 5.3-.2.8-.7 1.6-1.5 1.6l-8.5-.9c-.7-.2-1.5-.7-1.3-1.8 2-10.4 11.3-13.5 19.7-13.5 4.3 0 9.9 1.1 13.3 4.4 4.3 4 3.9 9.4 3.9 15.2v13.7c0 4.1 1.7 5.9 3.3 8.2.6.8.7 1.8 0 2.3-1.9 1.5-5.1 4.3-6.9 5.8zm-124.4-21.5c0 3.4.1 6.3-1.6 9.4-1.4 2.5-3.6 4-6.1 4-3.4 0-5.4-2.6-5.4-6.4 0-7.5 6.7-8.9 13.1-8.9zm8.8 21.5c-.6.5-1.4.6-2.1.2-2.9-2.4-3.5-3.6-5.1-5.9-4.8 4.9-8.3 6.4-14.5 6.4-7.4 0-13.2-4.6-13.2-13.7 0-7.2 3.9-12 9.4-14.4 4.8-2.1 11.5-2.5 16.6-3.1v-1.1c0-2.1.2-4.6-1.1-6.4-1.1-1.6-3.1-2.3-4.9-2.3-3.4 0-6.4 1.7-7.1 5.3-.2.8-.7 1.6-1.5 1.6l-8.5-.9c-.7-.2-1.5-.7-1.3-1.8 2-10.4 11.3-13.5 19.7-13.5 4.3 0 9.9 1.1 13.3 4.4 4.3 4 3.9 9.4 3.9 15.2v13.7c0 4.1 1.7 5.9 3.3 8.2.6.8.7 1.8 0 2.3-1.9 1.5-5.1 4.3-6.9 5.8z" />
    </g>
  </svg>
);
enum InvestmentElementStates {
  Decrease,
  Increase,
  None,
}
interface iInvestmentCard {
  label: string;
  fullLabel: string;
  tradingAt: number;
  percentChange: number;
  state: InvestmentElementStates;
  logo: JSX.Element;
}
const investmentCardList: iInvestmentCard[] = [
  {
    label: "TSLA",
    fullLabel: "Tesla Motors, Inc",
    tradingAt: 246.51,
    percentChange: -1.23,
    state: InvestmentElementStates.Decrease,
    logo: TeslaLogo,
  },
  {
    label: "FB",
    fullLabel: "Facebook, Inc",
    tradingAt: 189.83,
    percentChange: 2.83,
    state: InvestmentElementStates.Increase,
    logo: AmazonLogo,
  },
  {
    label: "AMZN",
    fullLabel: "Amazon",
    tradingAt: 220.93,
    percentChange: 0.23,
    state: InvestmentElementStates.None,
    logo: <Icon icon="FB" fontSize={60} />,
  },
];
const EnterpriseTheme = () => {
  const getPercentSymbolValue = (value: number) => {
    let symbol = "";
    if (value > 0) {
      symbol = "+";
    } else if (value < 0) {
      symbol = "-";
    }
    return symbol + Math.abs(value) + "%";
  };

  const InvestmentCardElement = (props: iInvestmentCard) => (
    <div className={"investmentCard " + InvestmentElementStates[props.state]}>
      <div className="headline two">{props.label}</div>
      <div className={"headline four "}>{props.fullLabel}</div>
      <div className="headline one">{props.tradingAt}</div>
      <div className="headline three">
        {getPercentSymbolValue(props.percentChange)}
      </div>
      <div className="flex">{props.logo}</div>
    </div>
  );
  return (
    <>
      <div className="cardContainer threeCols">
        {investmentCardList.map((item) => {
          return <InvestmentCardElement {...item} />;
        })}
      </div>
      <div className="cardContainer">
        <div className={"card Down chart"}>
          <div className="headline two">Bar Chart</div>

          <Chart
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["City", "2010 Population", "2000 Population"],
              ["New York City, NY", 8175000, 8008000],
              ["Los Angeles, CA", 3792000, 3694000],
              ["Chicago, IL", 2695000, 2896000],
              ["Houston, TX", 2099000, 1953000],
              ["Philadelphia, PA", 1526000, 1517000],
            ]}
            options={{
              title: "Population of Largest U.S. Cities",
              chartArea: { width: "50%" },
              isStacked: true,
              hAxis: {
                title: "Total Population",
                minValue: 0,
              },
              vAxis: {
                title: "City",
              },
            }}
            // For tests
            rootProps={{ "data-testid": "3" }}
          />
        </div>
        <div className="card Left chart">
          <div className="headline two">Line Chart</div>

          <Chart
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["x", "dogs", "cats"],
              [0, 0, 0],
              [1, 10, 5],
              [2, 23, 15],
              [3, 17, 9],
              [4, 18, 10],
              [5, 9, 5],
              [6, 11, 3],
              [7, 27, 19],
            ]}
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
            }}
            rootProps={{ "data-testid": "2" }}
          />
        </div>
      </div>
      <div className="cardContainer threeCols">
        <div className="card Left chart">
          <div className="headline two">Pie Chart</div>
          <Chart
            chartType="PieChart"
            data={[
              ["Task", "Hours per Day"],
              ["Work", 11],
              ["Eat", 2],
              ["Commute", 2],
              ["Watch TV", 2],
              ["Sleep", 7], // CSS-style declaration
            ]}
            options={{
              pieHole: 0.4,
              is3D: false,
            }}
          />
        </div>
      </div>
      <TutorialControl />
    </>
  );
};
export default EnterpriseTheme;
