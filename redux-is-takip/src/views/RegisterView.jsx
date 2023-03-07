import { Formik, Field, ErrorMessage, Form } from "formik";
import { registerSchemas } from "../schemas/registerSchemas";
import loginImage from "../images/loginImage.jpg";
import { register } from "../firebase/Config";
const RegisterView = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center shadow-lg shadow-gray-200 rounded-lg xl:w-1/2 lg:w-1/2 md:w-full">
        <div className="w-screen flex xl:flex-row sm:flex-col p-4">
          <div className="w-full">
            <img
              src={loginImage}
              alt={loginImage}
              className="rounded-lg xl:h-100"
            />
          </div>
          <div className=" xl:w-1/2 sm:w-full p-4 flex flex-col justify-center  ">
            <h4 className="text-gray-500 mb-5">Kayıt Ol</h4>
            <Formik
              initialValues={{
                employeeEmail: "",
                employeePassword: "",
                employeeConfirmPassword: "",
              }}
              onSubmit={async (values, { setSubmitting }) => {
                await register(values.employeeEmail, values.employeePassword);
                setSubmitting(false);
              }}
              validationSchema={registerSchemas}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-3">
                    <label htmlFor="employeeEmail" className="text-blue-500">
                      E-Posta
                    </label>
                    <Field
                      type="email"
                      id="employeeEmail"
                      name="employeeEmail"
                      className="p-2 rounded-r-lg outline-blue-200 border-blue-200 border w-full"
                      placeholder="E-Posta"
                    />

                    <ErrorMessage
                      name="employeeEmail"
                      component="small"
                      className="text-red-500"
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="employeePassword"
                          className="text-blue-500"
                        >
                          Şifre
                        </label>
                        <Field
                          type="password"
                          id="employeePassword"
                          name="employeePassword"
                          className="p-2 rounded-r-lg outline-blue-200 border-blue-200 border w-full"
                          placeholder="Şifre"
                        />
                        <ErrorMessage
                          name="employeePassword"
                          component="small"
                          className="text-red-500"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="employeeConfirmPassword"
                          className="text-blue-500"
                        >
                          Şifre(Tekrar)
                        </label>
                        <Field
                          type="password"
                          id="employeeConfirmPassword"
                          name="employeeConfirmPassword"
                          className="p-2 rounded-r-lg outline-blue-200 border-blue-200 border w-full"
                          placeholder="Şifre(Tekrar)"
                        />
                        <ErrorMessage
                          name="employeeConfirmPassword"
                          component="small"
                          className="text-red-500"
                        />
                      </div>
                    </div>
                  </div>
                  -
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center p-2 bg-blue-200 text-blue-700 rounded-lg ease-in-out duration-500 hover:text-blue-200 hover:bg-blue-700 w-full"
                    >
                      Kayıt Ol
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterView;
