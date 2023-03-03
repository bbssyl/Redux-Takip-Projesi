import * as Yup from "yup";

export const loginSchemas = Yup.object({
  employeeEmail: Yup.string()
    .email()
    .required("*Bu alanın doldurulması zorunludur"),
  employeePassword: Yup.string()
  .required("*Bu alanın doldurulması zorunludur"),
});
