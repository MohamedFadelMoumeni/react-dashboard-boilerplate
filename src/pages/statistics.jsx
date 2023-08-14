import Card from "../components/UI/card";
import ScatteChart from "../components/UI/chart-elements/ScatteChart";
import MultipleStatistics from "../components/UI/statistics/multiple-statistics";
import StatisticChart from "../components/UI/statistics/statistic-chart";
const Statistics = () => {
  return (
    <div className="w-full ">
      <div className="w-full mt-6 bg-transparent grid grid-cols-12 gap-4 ">
        <div className="col-span-4">
          <StatisticChart type="line" />
        </div>
        <div className="col-span-4">
          <StatisticChart type="line" />
        </div>
        <div className="col-span-4">
          <StatisticChart type="apex" />
        </div>
      </div>
      <div className="w-full grid grid-cols-12 gap-4  mb-8">
        <div className="col-span-6">
          <MultipleStatistics type="bar" />
        </div>
        <div className="col-span-6">
          <MultipleStatistics type="pie" />
        </div>
      </div>
      <Card>
        <ScatteChart />
      </Card>
    </div>
  );
};

export default Statistics;
