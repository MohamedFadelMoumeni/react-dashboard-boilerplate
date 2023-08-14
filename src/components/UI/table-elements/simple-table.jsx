import DataTable from "react-data-table-component";
import { BiChevronDown } from "react-icons/bi";
import Card from "../card";
import chance from "./data";
import tableStyle from "./generaleStyle";

const dataArr = new Array(100).fill({
  name: chance.name(),
  age: chance.age(),
  gender: chance.gender(),
  avatar: chance.avatar(),
  ssn: chance.ssn(),
});

const columns = [
  {
    name: "Name",
    selector: (row) => (
      <div className="flex items-center justify-center space-x-4">
        <img className="w-8 h-8 rounded-full" src={row.avatar} />
        <p>{row.name}</p>
      </div>
    ),
    sortable: true,
  },
  {
    name: "Age",
    selector: (row) => row.age,
    sortable: true,
  },
  {
    name: "Gender",
    selector: (row) => row.gender,
  },
  {
    name: "Social security number",
    selector: (row) => row.ssn,
  },
];

const CustomHeader = () => {
  return (
    <div className="w-full mb-4">
      <h1 className="text-2xl font-medium">Simple Table</h1>
    </div>
  );
};

const SimpleTable = () => {
  return (
    <Card>
      <DataTable
        sortIcon={<BiChevronDown size={20} className="ml-10" />}
        columns={columns}
        data={dataArr}
        responsive
        customStyles={tableStyle}
        pagination
        subHeader
        subHeaderComponent={<CustomHeader />}
      />
    </Card>
  );
};

export default SimpleTable;
