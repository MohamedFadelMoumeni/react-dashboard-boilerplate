import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";

const DatePicker = ({
  label,
  isTimeEnabled,
  onChange,
  value,
  error,
  ...otherProps
}) => {
  return (
    <div className="w-full flex flex-col ">
      <label className="text-sm pb-1">{label}</label>
      <Flatpickr
        className={`text-sm rounded-lg p-2 border-[1px] outline-none ${
          error && "border-red-500"
        }`}
        onChange={onChange}
        data-enable-time={isTimeEnabled}
        value={value}
      />
    </div>
  );
};

export default DatePicker;
