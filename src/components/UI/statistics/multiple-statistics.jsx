import { BsThreeDots } from "react-icons/bs";
import Card from "../card";
import BarChartTeny from "../chart-elements/BarChartTenty";
import PieChartElement from "../chart-elements/PieChart";

const chartType = {
  pie: <PieChartElement />,
  bar: <BarChartTeny />,
};

const MultipleStatistics = ({ type }) => {
  return (
    <Card>
      <div className="w-full flex items-center justify-between mb-6">
        <h1 className="text-xl">Active Projects</h1>
        <BsThreeDots cursor="pointer" size={18} />
      </div>
      <BarChartTeny />
    </Card>
  );
};

export default MultipleStatistics;
