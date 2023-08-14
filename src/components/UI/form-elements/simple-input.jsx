import FormError from "./form-error";

const SimpleInput = ({
  label,
  name,
  type,
  placeholder = "",
  error,
  ...otherProps
}) => {
  return (
    <div className="w-full flex flex-col mb-4">
      <label className="text-[13px] pb-1" htmlFor={name}>
        {label}
      </label>
      <input
        className={`text-sm rounded-lg p-2 border-[1px] outline-none ${
          error && "border-red-500"
        }`}
        type={type}
        name={name}
        placeholder={placeholder}
        {...otherProps}
      />
      {error && <FormError error={error} />}
    </div>
  );
};

export default SimpleInput;
