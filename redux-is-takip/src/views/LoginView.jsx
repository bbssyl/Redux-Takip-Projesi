import { Formik, Form, Field, ErrorMessage } from "formik";
import loginImage from "../images/loginImage.jpg";
import { loginSchemas } from "../schemas/loginSchemas";
import { CiLogin } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { auth, login } from "../firebase/Config";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const LoginView = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  });
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center  shadow-lg shadow-gray-200 rounded-lg xl:w-1/2 lg:w-1/2 md:w-full">
        <div className="w-screen flex xl:flex-row sm:flex-col p-4">
          <div className="w-full">
            <img src={loginImage} alt={loginImage} className="rounded-lg" />
          </div>
          <div className="xl:w-1/2 sm:w-full p-4 flex flex-col justify-center  ">
            <h4 className="text-gray-500 mb-5">Giriş yap</h4>
            <Formik
              initialValues={{ employeeEmail: "", employeePassword: "" }}
              onSubmit={async (values, { setSubmitting }) => {
                await login(values.employeeEmail, values.employeePassword);
                if (auth.currentUser) {
                  navigate("/dashboard");
                }
                setSubmitting(false);
              }}
              validationSchema={loginSchemas}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="p-2 mb-3 flex">
                    <label
                      htmlFor="employeeEmail"
                      className="text-blue-700 rounded-l-lg bg-blue-200 p-2 flex items-center"
                    >
                      <FaUser />
                    </label>
                    <Field
                      type="email"
                      id="employeeEmail"
                      name="employeeEmail"
                      className="p-2 rounded-r-lg outline-blue-200 border-blue-200 border w-full"
                      placeholder="E-posta"
                    />
                  </div>
                  <ErrorMessage
                    name="employeeEmail"
                    component="small"
                    className="text-red-500"
                  />
                  <div className="p-2 mb-3 flex">
                    <label
                      htmlFor="employeePassword"
                      className="text-blue-700 rounded-l-lg bg-blue-200 p-2 flex items-center"
                    >
                      <RiLockPasswordFill />
                    </label>
                    <Field
                      type="password"
                      id="employeePassword"
                      name="employeePassword"
                      className="p-2 rounded-r-lg outline-blue-200 border-blue-200 border w-full"
                      placeholder="Parola"
                    />
                  </div>
                  <ErrorMessage
                    name="employeePassword"
                    component="small"
                    className="text-red-500"
                  />
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center p-2 bg-blue-200 text-blue-700 rounded-lg ease-in-out duration-500 hover:text-blue-200 hover:bg-blue-700 w-full"
                    >
                      Giriş
                      <CiLogin className="fs-3" />
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

export default LoginView;
