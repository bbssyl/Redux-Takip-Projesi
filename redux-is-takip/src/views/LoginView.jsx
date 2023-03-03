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
  }, [user]);
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex items-center justify-center m-4 shadow-lg shadow-gray-200 rounded-lg w-1/2">
        <div className="w-screen flex flex-row p-4">
          <div className="w-1/2 p-4 flex flex-col justify-center  ">
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
                    className="text-danger"
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
                    className="text-danger"
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
          <div className="w-1/2">
            <img
              src={loginImage}
              alt={loginImage}
              className="img-fluid rounded-end h-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
