import React from "react";
import { Form, Field, ErrorMessage, Formik } from "formik";
import { updateEmployeeSchemas } from "../../schemas/updateEmployeeSchemas";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  addEmployeeToFirebase,
  updateEmployeeFromFirebase,
} from "../../firebase/Config";
import { useSelector } from "react-redux";
const EmployeeModal = ({ data, handleCloseModal, open, setOpen }) => {
  const { employeeStatus } = useSelector((state) => state.employee);
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
                    <p className="text-blue-400">Personel Formu</p>
                  </Dialog.Title>
                  <div className="mt-2">
                    <Formik
                      initialValues={
                        data || {
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
                          employeeRating: 0,
                        }
                      }
                      onSubmit={async (values, { setSubmitting }) => {
                        data
                          ? await updateEmployeeFromFirebase(values)
                          : await addEmployeeToFirebase(values);
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
                                className="text-red-400 fs-italic"
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
                                className="text-red-400 fs-italic"
                                name="employeeLastName"
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="" className="text-blue-400">
                                Doğum Tarihi
                              </label>
                              <Field
                                className="p-2 border outline-blue-300 rounded w-full"
                                name="employeeAge"
                                type="date"
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
                                className="text-red-400 fs-italic"
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
                                className="text-red-400 fs-italic"
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
                                className="text-red-400 fs-italic"
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
                                className="text-red-400 fs-italic"
                                name="employeeAddress"
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="" className="text-blue-400">
                                Ünvan
                              </label>
                              <Field
                                as="select"
                                className="p-2 border outline-blue-300 rounded w-full bg-transparent"
                                name="employeeStatus"
                                value={values.employeeStatus}
                                label="Çalışan"
                                onChange={(event) =>
                                  setFieldValue(
                                    "employeeStatus",
                                    event.target.value
                                  )
                                }
                              >
                                {employeeStatus.map((status) => {
                                  return (
                                    <option key={status.id} value={status.name}>
                                      {status.name}
                                    </option>
                                  );
                                })}
                              </Field>
                              <ErrorMessage
                                component="small"
                                className="text-red-400 fs-italic"
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
