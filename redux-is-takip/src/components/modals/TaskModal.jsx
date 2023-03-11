import { Dialog, Transition } from "@headlessui/react";
import { Field, Form, Formik } from "formik";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import {
  addTaskToFirebase,
  updateTaskFromFirebase,
} from "../../firebase/Config";

export const TaskModal = ({ isOpen, handleModalClose, data, setIsOpen }) => {
  const { employees } = useSelector((state) => state.employee);
  const employeeData = employees?.filter(
    (employee) => employee.employeeId === data.employeeId
  );
  const { user } = useSelector((state) => state.auth);
  const rates = [5, 4, 3, 2, 1];
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleModalClose}>
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
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {data ? "Görev Detayı" : "Yeni Görev Ekle"}
                  </Dialog.Title>

                  <div className="mt-4">
                    <Formik
                      initialValues={
                        data || {
                          name: "",
                          info: "",
                          created_at: "",
                          urgency: "",
                          isDone: false,
                          employeeId: employees[0]?.employeeId,
                          employeeRate: 5,
                          address: "",
                          userName: user.displayName,
                        }
                      }
                      onSubmit={async (values, { setSubmitting }) => {
                        data
                          ? await updateTaskFromFirebase(values)
                          : await addTaskToFirebase(values);
                        setIsOpen(false);
                        setSubmitting(false);
                      }}
                    >
                      {({ values, isSubmitting, setFieldValue }) => {
                        return (
                          <Form>
                            <div className="mb-3">
                              <label htmlFor="name" className=" text-blue-400">
                                Arıza Türü
                              </label>
                              <Field
                                className="p-2 rounded-lg outline-blue-200 border w-full"
                                type="text"
                                id="name"
                                name="name"
                                value={values.name}
                                onChange={(event) =>
                                  setFieldValue("name", event.target.value)
                                }
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="info" className="text-blue-400 ">
                                Açıklama
                              </label>
                              <Field
                                as="textarea"
                                className="p-2 rounded-lg outline-blue-200 border w-full"
                                type="text"
                                id="info"
                                name="info"
                                value={values.info}
                                onChange={(event) =>
                                  setFieldValue("info", event.target.value)
                                }
                              />
                            </div>
                            <div className="flex gap-2">
                              <div className="mb-3 ">
                                <label
                                  htmlFor="created_at"
                                  className="text-blue-400"
                                >
                                  Oluşturma tarihi
                                </label>
                                <Field
                                  className="p-2 rounded-lg outline-blue-200 border w-full"
                                  type="date"
                                  id="created_at"
                                  name="created_at"
                                  value={values.created_at}
                                  onChange={(event) =>
                                    setFieldValue(
                                      "created_at",
                                      event.target.value
                                    )
                                  }
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="urgency"
                                  className="text-blue-400"
                                >
                                  Öncelik
                                </label>
                                <Field
                                  as="select"
                                  className="p-2 rounded-lg bg-transparent outline-blue-200 border w-full"
                                  type="text"
                                  id="urgency"
                                  name="urgency"
                                  value={values.urgency}
                                  onChange={(event) =>
                                    setFieldValue("urgency", event.target.value)
                                  }
                                >
                                  <option>...</option>
                                  <option value="Normal">Normal</option>
                                  <option value="Acil">Acil</option>
                                </Field>
                              </div>
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="employeeId"
                                className="text-blue-400"
                              >
                                Personel
                              </label>
                              <Field
                                as="select"
                                className="p-2 rounded-lg bg-transparent outline-blue-200 border w-full"
                                type="text"
                                id="employeeId"
                                name="employeeId"
                                value={values.employeeId}
                                onChange={(event) =>
                                  setFieldValue(
                                    "employeeId",
                                    event.target.value
                                  )
                                }
                              >
                                {data ? (
                                  <option
                                    value={employeeData[0]?.employeeId}
                                    key={employeeData[0]?.id}
                                  >
                                    {employeeData[0]?.employeeFirstName}{" "}
                                    {employeeData[0]?.employeeLastName}
                                    {employeeData[0]?.employeeRating.length > 0
                                      ? ` (Puan: ${employeeData[0]?.employeeRating})`
                                      : null}
                                  </option>
                                ) : (
                                  employees.map((employee) => {
                                    return (
                                      <option
                                        value={employee.employeeId}
                                        key={employee.id}
                                      >
                                        {employee.employeeFirstName}{" "}
                                        {employee.employeeLastName}
                                        {employee.employeeRating.length > 0
                                          ? ` (Puan: ${employee.employeeRating})`
                                          : null}
                                      </option>
                                    );
                                  })
                                )}
                              </Field>
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="address"
                                className="text-blue-400 "
                              >
                                Adres
                              </label>
                              <Field
                                as="textarea"
                                className="p-2 rounded-lg outline-blue-200 border w-full"
                                type="text"
                                id="address"
                                name="address"
                                value={values.address}
                                onChange={(event) =>
                                  setFieldValue("address", event.target.value)
                                }
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="isDone">
                                <Field
                                  type="checkbox"
                                  id="isDone"
                                  name="isDone"
                                  checked={values.isDone}
                                  onChange={(event) =>
                                    setFieldValue(
                                      "isDone",
                                      event.target.checked
                                    )
                                  }
                                />{" "}
                                Tamamlandı?
                              </label>
                            </div>
                            {values.isDone ? (
                              <div className="mb-3">
                                <label htmlFor="employeeRate">
                                  Personel Değerlendirmesi:{" "}
                                </label>
                                <Field
                                  as="select"
                                  id="employeeRate"
                                  name="employeeRate"
                                  className="p-2 w-24 text-center rounded-lg"
                                  value={values.employeeRate}
                                  onChange={(event) =>
                                    setFieldValue(
                                      "employeeRate",
                                      event.target.value
                                    )
                                  }
                                >
                                  {rates.map((rate) => {
                                    return (
                                      <option key={rate} value={rate}>
                                        {rate}
                                      </option>
                                    );
                                  })}
                                </Field>
                              </div>
                            ) : null}
                            <button
                              disabled={isSubmitting}
                              type="submit"
                              className="bg-blue-200 text-blue-700 hover:bg-blue-600 hover:text-blue-200 ease-in-out duration-500 p-2 px-4 rounded-lg"
                            >
                              {data ? "Güncelle" : "Oluştur"}
                            </button>
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
