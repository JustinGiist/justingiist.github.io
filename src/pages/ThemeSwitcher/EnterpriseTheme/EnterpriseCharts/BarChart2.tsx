import { Loading } from "mdi-material-ui";
import Chart from "react-google-charts";
import { FakeLoader } from "../../../../components/Loading/Loading";
import { barChart2Data, chartColors } from "./ChartData";

export const BarChart2 = () => (
    <FakeLoader>
        <Chart
            className="chart"
            chartType="BarChart"
            loader={<Loading />}
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
    </FakeLoader>
);
export default BarChart2;