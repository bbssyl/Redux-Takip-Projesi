import React from "react";
import { Form, Field, ErrorMessage, Formik } from "formik";
import { useDispatch } from "react-redux";
import { updateEmployee } from "../../slices/employeesSlice";
import { updateEmployeeSchemas } from "../../schemas/updateEmployeeSchemas";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
const EmployeeModal = ({ data, handleCloseModal, open, setOpen }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleCloseModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <p className="text-blue-400">
                      {data.employeeId} sicil numaralı personel
                    </p>
                  </Dialog.Title>
                  <div className="mt-2">
                    <Formik
                      initialValues={data}
                      onSubmit={(values, { setSubmitting }) => {
                        dispatch(updateEmployee(values));
                        setOpen(false);
                        setSubmitting(false);
                      }}
                      validationSchema={updateEmployeeSchemas}
                    >
                      {({ isSubmitting, values, setFieldValue }) => {
                        return (
                          <Form>
                            <div className="mb-3">
                              <label htmlFor="" className="text-blue-400">
                                Personel Ad
                              </label>
                              <Field
                                className="p-2 border outline-blue-300 rounded w-full"
                                name="employeeFirstName"
                                type="text"
                                value={values.employeeFirstName}
                                onChange={(event) =>
                                  setFieldValue(
                                    "employeeFirstName",
                                    event.target.value
                                  )
                                }
                              />
                              <ErrorMessage
                                component="small"
                                className="text-danger fs-italic"
                                name="employeeFirstName"
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="" className="text-blue-400">
                                Personel Soyad
                              </label>
                              <Field
                                className="p-2 border outline-blue-300 rounded w-full"
                                name="employeeLastName"
                                type="text"
                                value={values.employeeLastName}
                                onChange={(event) =>
                                  setFieldValue(
                                    "employeeLastName",
                                    event.target.value
                                  )
                                }
                              />
                              <ErrorMessage
                                component="small"
                                className="text-danger fs-italic"
                                name="employeeLastName"
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="" className="text-blue-400">
                                Cinsiyet
                              </label>
                              <Field
                                className="p-2 border outline-blue-300 rounded w-full"
                                name="employeeGender"
                                type="text"
                                value={
                                  values.employeeGender === "e"
                                    ? "Erkek"
                                    : "Kadın"
                                }
                                onChange={(event) =>
                                  setFieldValue(
                                    "employeeGender",
                                    event.target.value
                                  )
                                }
                                disabled
                              />
                              <ErrorMessage
                                component="small"
                                className="text-danger fs-italic"
                                name="employeeGender"
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="" className="text-blue-400">
                                Doğum Tarihi
                              </label>
                              <Field
                                className="p-2 border outline-blue-300 rounded w-full"
                                name="employeeAge"
                                type="number"
                                value={values.employeeAge}
                                onChange={(event) =>
                                  setFieldValue(
                                    "employeeAge",
                                    event.target.value
                                  )
                                }
                              />
                              <ErrorMessage
                                component="small"
                                className="text-danger fs-italic"
                                name="employeeAge"
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="" className="text-blue-400">
                                Telefon Numarası
                              </label>
                              <Field
                                className="p-2 border outline-blue-300 rounded w-full"
                                name="employeePhone"
                                type="text"
                                value={values.employeePhone}
                                onChange={(event) =>
                                  setFieldValue(
                                    "employeePhone",
                                    event.target.value
                                  )
                                }
                              />
                              <ErrorMessage
                                component="small"
                                className="text-danger fs-italic"
                                name="employeePhone"
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="" className="text-blue-400">
                                E-posta
                              </label>
                              <Field
                                className="p-2 border outline-blue-300 rounded w-full"
                                name="employeeEmail"
                                type="email"
                                value={values.employeeEmail}
                                onChange={(event) =>
                                  setFieldValue(
                                    "employeeEmail",
                                    event.target.value
                                  )
                                }
                              />
                              <ErrorMessage
                                component="small"
                                className="text-danger fs-italic"
                                name="employeeEmail"
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="" className="text-blue-400">
                                Adres
                              </label>
                              <Field
                                as="textarea"
                                className="p-2 border outline-blue-300 rounded w-full"
                                name="employeeAddress"
                                value={values.employeeAddress}
                                onChange={(event) =>
                                  setFieldValue(
                                    "employeeAddress",
                                    event.target.value
                                  )
                                }
                              />
                              <ErrorMessage
                                component="small"
                                className="text-danger fs-italic"
                                name="employeeAddress"
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="" className="text-blue-400">
                                Ünvan
                              </label>
                              <Field
                                className="p-2 border outline-blue-300 rounded w-full"
                                name="employeeStatus"
                                value={values.employeeStatus}
                                label="Çalışan"
                                onChange={(event) =>
                                  setFieldValue(
                                    "employeeStatus",
                                    event.target.value
                                  )
                                }
                              />
                              <ErrorMessage
                                component="small"
                                className="text-danger fs-italic"
                                name="employeeStatus"
                              />
                            </div>
                            <div className="mb-3 flex justify-center gap-2">
                              <button
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                color="primary"
                                type="submit"
                                disabled={isSubmitting}
                              >
                                Güncelle
                              </button>
                              <button
                                className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                                color="secondary"
                                onClick={() => {
                                  handleCloseModal();
                                }}
                              >
                                Vazgeç
                              </button>
                            </div>
                          </Form>
                        );
                      }}
                    </Formik>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default EmployeeModal;
