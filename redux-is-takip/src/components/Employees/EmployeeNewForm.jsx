import { Field, Form, Formik, ErrorMessage } from "formik";
import { newEmployeeSchemas } from "../../schemas/newEmployeeSchemas";
import { useNavigate } from "react-router-dom";
import { createNewEmployee } from "../../firebase/Admin";
const EmployeeNewForm = () => {
  const navigate = useNavigate();

  return (
    <>
      <h4 className="text-blue-400">Yeni Personel Kayıt Formu</h4>
      <div className="h-full flex items-center justify-center">
        <div className="w-5/6 flex items-center justify-center mt-5 p-4">
          <Formik
            initialValues={{
              email: "",
              emailVerified: false,
              phoneNumber: "",
              password: "",
              displayName: "",
              photoURL: "",
              disabled: false,
            }}
            onSubmit={async (values, { setSubmitting }) => {
              await createNewEmployee(values);
              setSubmitting(false);
              navigate("/dashboard/employees");
            }}
            validationSchema={newEmployeeSchemas}
          >
            {({ isSubmitting }) => {
              return (
                <Form>
                  <div className="flex flex-row xs:flex-col flex-wrap">
                    <div className="w-1/3 xs:w-full">
                      <div className="mb-3">
                        <div className="px-2">
                          <label htmlFor="displayName">Ad Soyad</label>
                          <Field
                            type="text"
                            id="displayName"
                            name="displayName"
                            className="w-full outline-blue-200 p-2 rounded-lg border"
                            placeholder="Ad Soyad"
                          />
                          <ErrorMessage
                            component="small"
                            name="displayName"
                            className="text-red-700"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-1/3 xs:w-full">
                      <div className="px-2">
                        <label htmlFor="password">Parola</label>
                        <div className="mb-3">
                          <Field
                            type="password"
                            id="password"
                            name="password"
                            className="w-full outline-blue-200 p-2 rounded-lg border"
                            placeholder="Parola"
                          />
                          <ErrorMessage
                            component="small"
                            name="password"
                            className="text-red-700"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="xl:w-1/3 xs:w-full sm:w-1/2">
                      <div className="mb-3">
                        <div className="px-2">
                          <label htmlFor="email">E-Posta</label>
                          <Field
                            type="email"
                            id="email"
                            name="email"
                            className="w-full outline-blue-200 p-2 rounded-lg border"
                            placeholder="E-Posta"
                          />
                          <ErrorMessage
                            component="small"
                            name="email"
                            className="text-red-700"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="xl:w-1/4 xs:w-full sm:w-1/2">
                      <div className="mb-3">
                        <div className="px-2">
                          <label htmlFor="phoneNumber">Telefon Numarası</label>
                          <Field
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            className="w-full outline-blue-200 p-2 rounded-lg border"
                            placeholder="Telefon Numarası"
                          />
                          <ErrorMessage
                            component="small"
                            name="phoneNumber"
                            className="text-red-700"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="xl:w-1/4 xs:w-full sm:w-1/2">
                      <div className="mb-3">
                        <div className="px-2">
                          <label htmlFor="photoURL">PhotoURL</label>
                          <Field
                            type="text"
                            id="photoURL"
                            name="photoURL"
                            className="w-full outline-blue-200 p-2 rounded-lg border"
                            placeholder="url..."
                          />
                          <ErrorMessage
                            component="small"
                            name="photoURL"
                            className="text-red-700"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex mx-auto gap-2 justify-center">
                      <button
                        type="submit"
                        className="text-blue-700 bg-blue-200 p-2 px-4 rounded-lg hover:bg-blue-600 hover:text-blue-50 ease-in-out duration-500"
                        disabled={isSubmitting}
                      >
                        Ekle
                      </button>
                      <button
                        type="reset"
                        className="text-gray-700 bg-gray-200 p-2 px-4 rounded-lg hover:bg-gray-600 hover:text-gray-50 ease-in-out duration-500"
                        disabled={isSubmitting}
                      >
                        Temizle
                      </button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default EmployeeNewForm;
