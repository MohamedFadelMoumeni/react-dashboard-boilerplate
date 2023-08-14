import { Field } from "formik";
import SimpleInput from "../../UI/form-elements/simple-input";

const SecondForm = ({ errors, touched }) => {
  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-12 gap-4">
        <div className="w-full col-span-6">
          <Field
            as={SimpleInput}
            type="number"
            name="age"
            label="Age"
            error={errors.age && touched.age ? errors.age : false}
          />
        </div>
        <div className="w-full col-span-6">
          <Field
            as={SimpleInput}
            type="text"
            name="phone"
            label="Phone"
            error={errors.phone && touched.phone ? errors.phone : false}
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-12 gap-4">
        <div className="w-full col-span-6">
          <Field
            as={SimpleInput}
            type="text"
            name="work"
            label="Work"
            error={errors.work && touched.work ? errors.work : false}
          />{" "}
        </div>
        <div className="w-full col-span-6">
          <Field
            as={SimpleInput}
            type="text"
            name="company"
            label="Company"
            error={errors.company && touched.company ? errors.company : false}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondForm;
