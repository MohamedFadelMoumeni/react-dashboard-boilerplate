import * as Yup from "yup";

export default [
  Yup.object().shape({
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
  }),
  Yup.object().shape({
    age: Yup.number().required(),
    work: Yup.string().required(),
    phone: Yup.string().required(),
    company: Yup.string().required(),
  }),
];
