import FormError from "./form-error";

const IconInput = ({
  label,
  name,
  type,
  placeholder = "",
  error,
  icon,
  ...otherProps
}) => {
  return (
    <div className="w-full flex flex-col mb-4">
      <label className="text-[13px] pb-1" htmlFor={name}>
        {label}
      </label>
      <div className="w-full flex items-center rounded-lg p-2 border-[1px]">
        {icon}
        <input
          className={`text-sm rounded-lg grow ${
            error && "border-red-500"
          } outline-none ml-2`}
          type={type}
          name={name}
          placeholder={placeholder}
          {...otherProps}
        />
      </div>
      {error && <FormError error={error} />}
    </div>
  );
};

export default IconInput;
