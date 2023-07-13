import { Loading } from "mdi-material-ui";
import Chart from "react-google-charts";
import { FakeLoader } from "../../../../components/Loading/Loading";
import { comboChartData, chartColors } from "./ChartData";

export const ComboChart = () => (
    <FakeLoader>
        <Chart
            chartType="ComboChart"
            width="100%"
            loader={<Loading />}
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
    </FakeLoader>
);
export default ComboChart;