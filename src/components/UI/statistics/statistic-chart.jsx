import Card from "../card";
import ApexChartTeny from "../chart-elements/ApexChartTeny";
import LineChartTeny from "../chart-elements/LineChartTeny";

const chartType = {
  apex: <ApexChartTeny />,
  line: <LineChartTeny />,
};

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const StatisticChart = ({ type }) => {
  return (
    <Card>
      <div className="w-full flex  justify-between items-stretch">
        <div className="grow stretch mr-4">
          <h1 className="text-xl font-medium">Profit</h1>
          <p className="text-[13px] text-gray-500">Expenses</p>
          <div className="w-full flex items-center justify-between mt-4">
            <h1 className="text-2xl font-medium ">600K</h1>
            <p className="text-green-500 text-sm">+8.24%</p>
          </div>
        </div>
        {chartType[type]}
      </div>
    </Card>
  );
};

export default StatisticChart;
