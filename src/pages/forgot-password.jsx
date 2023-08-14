import { Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Logo from "../assets/LYAZIDI-Assurances-logo.png";
import AuthInput from "../components/UI/form-elements/auth-input";
import { AdminContext } from "../context/admin.context";

const validationSchama = Yup.object({
  email: Yup.string().email().required("Obligatoire"),
});

const Forgotpassword = () => {
  const { setAdmin } = useContext(AdminContext);
  return (
    <div className="w-full h-full  flex items-center justify-center">
      <div className="w-[90%] md:w-[70%]">
        <img
          alt="logo lyazidi"
          width={100}
          src={Logo}
          className="mb-14 mx-auto"
        />
        <h1 className="font-medium text-2xl mb-8">
          {" "}
          Connexion à votre espace d{"'"}administration{" "}
        </h1>
        <Formik
          validationSchema={validationSchama}
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            setAdmin(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="space-y-4 w-full mx-auto">
              <Field
                as={AuthInput}
                type="email"
                name="email"
                error={errors.email && touched.email ? errors.email : false}
                label="Email"
              />

              <button
                type="submit"
                className="w-full py-2 text-white bg-dark rounded-lg text-sm font-bold hover:bg-dark/90"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
        <Link to="/login" className="text-sm text-dark mt-1">
          Back to login ?
        </Link>
      </div>
    </div>
  );
};

export default Forgotpassword;
