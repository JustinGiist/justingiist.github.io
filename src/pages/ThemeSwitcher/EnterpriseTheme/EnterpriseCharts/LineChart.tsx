import { Loading } from "mdi-material-ui";
import Chart from "react-google-charts";
import { FakeLoader } from "../../../../components/Loading/Loading";
import { lineChartData, chartColors } from "./ChartData";

export const LineChart = () => (
    <FakeLoader>
        <Chart
            className="chart"
            chartType="LineChart"
            loader={<Loading />}
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
    </FakeLoader>
);
export default LineChart;