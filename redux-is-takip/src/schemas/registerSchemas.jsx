import * as Yup from "yup";

export const registerSchemas = Yup.object({
  employeeEmail: Yup.string()
    .email("*Geçerli bir mail adresi girin")
    .required("*Bu alanın doldurulması zorunludur"),
  employeePassword: Yup.string()
    .min(8, "Şifre minimum 8 karakter olmalıdır")
    .required("*Bu alanın doldurulması zorunludur"),
  employeeConfirmPassword: Yup.string().oneOf(
    [Yup.ref("employeePassword"), null],
    "Şifre eşleşmiyor."
  ),
});
