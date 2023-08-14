import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Card from "../UI/card";
import DatePicker from "../UI/form-elements/date-picker";
import SimpleInput from "../UI/form-elements/simple-input";

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
  date: Yup.string().required(),
});

const MultiColumnsForm = () => {
  return (
    <Card>
      <h1 className="text-lg mb-8">Multi-Columns Form</h1>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          date: "",
          age: "",
        }}
      >
        {({ errors, touched, resetForm, values, setFieldValue }) => {
          console.log(values);
          return (
            <Form>
              <div className="w-full grid grid-cols-12 gap-6">
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
                      errors.last_name && touched.last_name
                        ? errors.last_name
                        : false
                    }
                  />
                </div>
              </div>
              <div className="w-full grid grid-cols-12 gap-6">
                <div className="w-full col-span-6">
                  <Field
                    as={SimpleInput}
                    type="email"
                    name="email"
                    label="Email"
                    error={errors.email && touched.email ? errors.email : false}
                  />
                </div>
                <div className="w-full col-span-6">
                  <Field
                    as={SimpleInput}
                    type="password"
                    name="password"
                    label="Password"
                    error={
                      errors.password && touched.password
                        ? errors.password
                        : false
                    }
                  />
                </div>
              </div>
              <div className="w-full grid grid-cols-12 gap-6">
                <div className="w-full col-span-6">
                  <Field
                    as={DatePicker}
                    name="date"
                    label="Date"
                    value={values.date}
                    error={errors.date && touched.date ? errors.date : false}
                    onChange={(date, dateStr) => setFieldValue("date", dateStr)}
                  />
                </div>
                <div className="w-full col-span-6">
                  <Field
                    as={SimpleInput}
                    type="number"
                    name="age"
                    label="Age"
                    error={errors.age && touched.age ? errors.age : false}
                  />
                </div>
              </div>

              <div className="w-full flex items-center  space-x-2">
                <button
                  type="submit"
                  className="font-meduim text-white bg-dark px-4 py-1 rounded-lg shadow-lg"
                >
                  Submit
                </button>
                <button
                  onClick={() => resetForm()}
                  type="button"
                  className="font-meduim text-white bg-gray-400 px-4 py-1 rounded-lg shadow-lg"
                >
                  Reset
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </Card>
  );
};

export default MultiColumnsForm;
