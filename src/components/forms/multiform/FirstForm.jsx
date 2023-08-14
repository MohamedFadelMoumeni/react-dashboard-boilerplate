import { Field } from "formik";
import SimpleInput from "../../UI/form-elements/simple-input";

const FirstForm = ({ errors, touched }) => {
  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-12 gap-4">
        <div className="w-full col-span-6">
          <Field
            as={SimpleInput}
            type="text"
            name="first_name"
            label="First name"
            error={
              errors.first_name && touched.first_name
                ? errors.first_name
                : false
            }
          />
        </div>
        <div className="w-full col-span-6">
          <Field
            as={SimpleInput}
            type="text"
            name="last_name"
            label="Last name"
            error={
              errors.last_name && touched.last_name ? errors.last_name : false
            }
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-12 gap-4">
        <div className="w-full col-span-6">
          <Field
            as={SimpleInput}
            type="email"
            name="email"
            label="Email"
            error={errors.email && touched.email ? errors.email : false}
          />{" "}
        </div>
        <div className="w-full col-span-6">
          <Field
            as={SimpleInput}
            type="password"
            name="password"
            label="Password"
            error={
              errors.password && touched.password ? errors.password : false
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FirstForm;
