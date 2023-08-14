import IconForm from "../components/forms/icon-form";
import MultiColumnsForm from "../components/forms/multicolumn-form";
import MultiStepForm from "../components/forms/multiform";
import SimpleForm from "../components/forms/simple-form";
const Forms = () => {
  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <SimpleForm />
        </div>
        <div className="col-span-6">
          <IconForm />
        </div>
      </div>

      <MultiColumnsForm />
      <MultiStepForm />
    </div>
  );
};

export default Forms;
