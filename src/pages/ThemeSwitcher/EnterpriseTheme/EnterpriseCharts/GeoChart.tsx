import { Loading } from "mdi-material-ui";
import Chart from "react-google-charts";
import { FakeLoader } from "../../../../components/Loading/Loading";
import { chartColors, geoChartData } from "./ChartData";

const GeoChart = ({
    isMobile
}: ({ isMobile: boolean })) => (
    <FakeLoader>
        <Chart
            options={{
                colors: chartColors,
            }}
            loader={<Loading />}
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
            height={isMobile ? "280px" : "600px"}
            data={geoChartData}
        />
    </FakeLoader>
);
export default GeoChart;