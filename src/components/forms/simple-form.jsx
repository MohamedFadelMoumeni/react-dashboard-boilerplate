import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Card from "../UI/card";
import SimpleInput from "../UI/form-elements/simple-input";

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
});

const SimpleForm = () => {
  return (
    <Card>
      <h1 className="text-lg mb-8">Simple Form</h1>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          password: "",
        }}
      >
        {({ errors, touched, resetForm }) => {
          return (
            <Form>
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
              <Field
                as={SimpleInput}
                type="email"
                name="email"
                label="Email"
                error={errors.email && touched.email ? errors.email : false}
              />
              <Field
                as={SimpleInput}
                type="password"
                name="password"
                label="Password"
                error={
                  errors.password && touched.password ? errors.password : false
                }
              />
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

export default SimpleForm;
