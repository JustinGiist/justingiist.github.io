import { Loading } from "mdi-material-ui";
import Chart from "react-google-charts";
import { FakeLoader } from "../../../../components/Loading/Loading";
import { barChartData, chartColors } from "./ChartData";

const BarChart = ({
    isMobile
}: ({ isMobile: boolean })) => (
    <FakeLoader>
        <Chart
            className="chart"
            chartType="Bar"
            loader={<Loading />}
            width={"100%"}
            height={isMobile ? "280px" : "400px"}
            data={barChartData}
            options={{
                colors: chartColors,
                chart: {
                title: "Facebook Performance",
                subtitle: "Sales, Expenses, and Profit: 2014-2017",
                },
            }}
        />
    </FakeLoader>
);
export default BarChart;