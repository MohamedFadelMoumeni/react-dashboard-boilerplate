import DataTable from "react-data-table-component";
import { BiChevronDown } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import Card from "../card";
import ListBox from "../form-elements/list-box";
import chance from "./data";
import tableStyle from "./generaleStyle";

const dataArr = new Array(100).fill({
  id: chance.guid(),
  name: chance.name(),
  age: chance.age(),
  gender: chance.gender(),
  avatar: chance.avatar(),
  ssn: chance.ssn(),
  email: chance.email(),
  status: chance.nationality(),
});

const columns = [
  {
    name: "Name",
    minWidth: "200px",
    selector: (row) => (
      <div className="flex items-center justify-center space-x-4">
        <img className="w-8 h-8 rounded-full" src={row.avatar} />
        <div>
          <p>{row.name}</p>
          <p className="text-[13px]">{row.email}</p>
        </div>
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
    minWidth: "250px",
  },
  {
    name: "Status",
    center: true,
    selector: (row) => (
      <span className="px-2 py-1 bg-red-200 text-sm text-red-900 rounded-lg font-medium">
        {row.status}
      </span>
    ),
  },
];

const CustomHeader = () => {
  return (
    <div className="w-full mb-4">
      <h1 className="text-2xl font-medium mb-8">Table With Filter</h1>
      <div className="w-full grid grid-cols-12 mb-4">
        <div className="col-span-4">
          <ListBox />
        </div>
        <div className="col-span-4">
          <ListBox />
        </div>
        <div className="col-span-4">
          <ListBox />
        </div>
      </div>
      <div className="w-full flex items-center justify-between border-t-[1px] py-4  border-b-[1px] ">
        <input
          type="search"
          className="border-[1px] rounded-lg px-2 py-1.5 outline-none"
          placeholder="Search"
        />
        <button className="font-medium text-white text-sm rounded-lg bg-dark px-6 py-2 flex items-center justify-center space-x-2">
          <BsPlus size={24} />
          <p>Add a new</p>
        </button>
      </div>
    </div>
  );
};

const FilterTable = () => {
  return (
    <Card>
      <DataTable
        selectableRows
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

export default FilterTable;
