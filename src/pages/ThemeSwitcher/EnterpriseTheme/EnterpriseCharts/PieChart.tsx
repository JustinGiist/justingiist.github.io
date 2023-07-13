import { Loading } from "mdi-material-ui";
import Chart from "react-google-charts";
import { FakeLoader } from "../../../../components/Loading/Loading";
import { pieChartData, chartColors } from "./ChartData";

export const PieChart = () => (
    <FakeLoader>
        <Chart
            chartType="PieChart"
            data={pieChartData}
            loader={<Loading />}
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
    </FakeLoader>
);
export default PieChart;