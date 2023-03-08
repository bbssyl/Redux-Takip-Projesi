import { Field, Form, Formik, ErrorMessage } from "formik";
import { useSelector } from "react-redux";
import { newEmployeeSchemas } from "../../schemas/newEmployeeSchemas";
import { useNavigate } from "react-router-dom";
import { addEmployeeToFirebase } from "../../firebase/Config";
const EmployeeNewForm = () => {
  const { employeeStatus } = useSelector((state) => state.employee);
  const navigate = useNavigate();

  return (
    <>
      <h4 className="text-blue-400">Yeni Personel Kayıt Formu</h4>
      <div className="h-full flex items-center justify-center">
        <div className="w-5/6 flex items-center justify-center mt-5 p-4">
          <Formik
            initialValues={{
              employeeId: "",
              employeeFirstName: "",
              employeeLastName: "",
              employeeGender: "...",
              employeeAge: "",
              employeePhone: "",
              employeeEmail: "",
              employeePassword: "",
              employeeAddress: "",
              employeeStatus: "...",
              employeeRating: [],
            }}
            onSubmit={async (value, { setSubmitting }) => {
              await addEmployeeToFirebase(value);
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
                      <div className="px-2">
                        <label htmlFor="employeeId">Personel ID</label>
                        <div className="mb-3">
                          <Field
                            type="text"
                            id="employeeId"
                            name="employeeId"
                            className="w-full outline-blue-200 p-2 rounded-lg border"
                            placeholder="Personel ID"
                          />
                          <ErrorMessage
                            component="small"
                            name="employeeId"
                            className="text-red-700"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-1/3 xs:w-full">
                      <div className="mb-3">
                        <div className="px-2">
                          <label htmlFor="employeeFirstName">Personel Ad</label>
                          <Field
                            type="text"
                            id="employeeFirstName"
                            name="employeeFirstName"
                            className="w-full outline-blue-200 p-2 rounded-lg border"
                            placeholder="Personel Ad"
                          />
                          <ErrorMessage
                            component="small"
                            name="employeeFirstName"
                            className="text-red-700"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-1/3 xs:w-full">
                      <div className="mb-3">
                        <div className="px-2">
                          <label htmlFor="employeeLastName">
                            Personel Soyad
                          </label>
                          <Field
                            type="text"
                            id="employeeLastName"
                            name="employeeLastName"
                            className="w-full outline-blue-200 p-2 rounded-lg border"
                            placeholder="Personel Soyad"
                          />
                          <ErrorMessage
                            component="small"
                            name="employeeLastName"
                            className="text-red-700"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="xl:w-1/4 xs:w-full sm:w-1/2">
                      <div className="mb-3">
                        <div className="px-2">
                          <label htmlFor="employeeGender">Cinsiyet</label>
                          <Field
                            as="select"
                            id="employeeGender"
                            name="employeeGender"
                            className="w-full outline-blue-200 p-2 rounded-lg border bg-transparent"
                          >
                            <option>...</option>
                            <option value="e">Erkek</option>
                            <option value="k">Kadın</option>
                          </Field>
                          <ErrorMessage
                            component="small"
                            name="employeeGender"
                            className="text-red-700"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="xl:w-1/4 xs:w-full sm:w-1/2">
                      <div className="mb-3">
                        <div className="px-2">
                          <label htmlFor="employeeAge">Yaş</label>
                          <Field
                            type="number"
                            id="employeeAge"
                            name="employeeAge"
                            className="w-full outline-blue-200 p-2 rounded-lg border"
                            placeholder="Yaş"
                          />
                          <ErrorMessage
                            component="small"
                            name="employeeAge"
                            className="text-red-700"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="xl:w-1/4 xs:w-full sm:w-1/2">
                      <div className="mb-3">
                        <div className="px-2">
                          <label htmlFor="employeePhone">
                            Telefon Numarası
                          </label>
                          <Field
                            type="text"
                            id="employeePhone"
                            name="employeePhone"
                            className="w-full outline-blue-200 p-2 rounded-lg border"
                            placeholder="Telefon Numarası"
                          />
                          <ErrorMessage
                            component="small"
                            name="employeePhone"
                            className="text-red-700"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="xl:w-1/4 xs:w-full sm:w-1/2">
                      <div className="mb-3">
                        <div className="px-2">
                          <label htmlFor="employeeEmail">E-Posta</label>
                          <Field
                            type="email"
                            id="employeeEmail"
                            name="employeeEmail"
                            className="w-full outline-blue-200 p-2 rounded-lg border"
                            placeholder="E-Posta"
                          />
                          <ErrorMessage
                            component="small"
                            name="employeeEmail"
                            className="text-red-700"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="mb-3">
                        <div className="px-2">
                          <label htmlFor="employeeStatus">Ünvan</label>
                          <Field
                            as="select"
                            id="employeeStatus"
                            name="employeeStatus"
                            className="w-full outline-blue-200 p-2 rounded-lg border bg-transparent"
                            placeholder="Ünvan"
                          >
                            <option>...</option>
                            {employeeStatus?.map((employee) => {
                              return (
                                <option key={employee.id} value={employee.name}>
                                  {employee.name}
                                </option>
                              );
                            })}
                          </Field>
                          <ErrorMessage
                            component="small"
                            name="employeeStatus"
                            className="text-red-700"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="mb-3">
                        <div className="px-2">
                          <label htmlFor="employeeAddress">Adres</label>
                          <Field
                            as="textarea"
                            id="employeeAddress"
                            name="employeeAddress"
                            className="w-full outline-blue-200 p-2 rounded-lg border"
                            placeholder="Adres"
                          />
                          <ErrorMessage
                            component="small"
                            name="employeeAddress"
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
