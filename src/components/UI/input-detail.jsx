import React from "react";

import { Field, useFormikContext } from "formik";

const Input = ({ type, name, label, value }) => {
  return (
    <div className="w-full space-y-1">
      <label htmlFor={name} className="text-sm">
        {label}
      </label>
      <input
        value={value}
        as="input"
        type={type}
        className="w-full text-sm rounded-lg py-2 px-2 ring-0 border-[1px] border-gray-300"
      />
    </div>
  );
};

export default Input;
