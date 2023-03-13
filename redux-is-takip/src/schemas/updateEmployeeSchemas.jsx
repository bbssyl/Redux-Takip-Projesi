import * as Yup from "yup";

export const updateEmployeeSchemas = Yup.object({
  employeeFirstName: Yup.string().required(
    "*Bu alanın doldurulması zorunludur"
  ),
  employeeLastName: Yup.string().required("*Bu alanın doldurulması zorunludur"),
  employeeAge: Yup.date().required("*Bu alanın doldurulması zorunludur"),
  employeePhone: Yup.number()
    .positive("*Negatif bir değer giremezsiniz")
    .typeError("*Geçerli bir telefon numarası girin")
    .required("*Bu alanın doldurulması zorunludur"),
  employeeEmail: Yup.string()
    .email("*Geçerli bir mail adresi girin")
    .required("*Bu alanın doldurulması zorunludur"),
  employeeAddress: Yup.string().required("*Bu alanın doldurulması zorunludur"),
  employeeStatus: Yup.string().required("*Bu alanın doldurulması zorunludur"),
});
