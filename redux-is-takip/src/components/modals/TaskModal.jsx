import { Dialog, Transition } from "@headlessui/react";
import { Field, Form, Formik } from "formik";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid4 } from "uuid";
import { addTask, updateTask } from "../../slices/tasksSlice";
import { addTaskToDb, updateTaskFromDb } from "../api/api";

export const TaskModal = ({ isOpen, handleModalClose, data, setIsOpen }) => {
  const dispatch = useDispatch();
  const { employees } = useSelector((state) => state.employee);
  const employeeData = employees?.filter(
    (employee) => employee.employeeId === data.employeeId
  );
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
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
                          id: uuid4(),
                          name: "",
                          info: "",
                          created_at: "",
                          urgency: "",
                          isDone: false,
                          employeeId: employees[0]?.employeeId,
                        }
                      }
                      onSubmit={(values, { setSubmitting }) => {
                        data
                          ? dispatch(updateTaskFromDb(values))
                          : dispatch(addTaskToDb(values));
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
                                />
                                Tamamlandı?
                              </label>
                            </div>
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
