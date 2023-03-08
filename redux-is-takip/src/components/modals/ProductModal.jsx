import { Dialog, Transition } from "@headlessui/react";
import { Field, Form, Formik } from "formik";
import { Fragment } from "react";
import {
  addProductToFirebase,
  updateProductFromFirebase,
} from "../../firebase/Config";
const ProductModal = ({ isOpen, handleModalClose, data, setIsOpen }) => {
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
                    {data ? "Ürün Detayı" : "Yeni Ürün"}
                  </Dialog.Title>

                  <div className="mt-4">
                    <Formik
                      initialValues={
                        data || {
                          name: "",
                          type: "",
                          brand: "",
                          model: "",
                          price: 0,
                          info: "",
                        }
                      }
                      onSubmit={async (values, { setSubmitting }) => {
                        data
                          ? await updateProductFromFirebase(values)
                          : await addProductToFirebase(values);
                        setIsOpen(false);
                        setSubmitting(false);
                      }}
                    >
                      {({ values, isSubmitting, setFieldValue }) => {
                        return (
                          <Form>
                            <div className="mb-3">
                              <label htmlFor="name" className=" text-blue-400">
                                Ürün Adı
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
                              <label htmlFor="type" className="text-blue-400 ">
                                Tür
                              </label>
                              <Field
                                className="p-2 rounded-lg outline-blue-200 border w-full"
                                type="text"
                                id="type"
                                name="type"
                                value={values.type}
                                onChange={(event) =>
                                  setFieldValue("type", event.target.value)
                                }
                              />
                            </div>
                            <div className="flex gap-2">
                              <div className="mb-3 ">
                                <label
                                  htmlFor="brand"
                                  className="text-blue-400"
                                >
                                  Marka
                                </label>
                                <Field
                                  className="p-2 rounded-lg outline-blue-200 border w-full"
                                  type="text"
                                  id="brand"
                                  name="brand"
                                  value={values.brand}
                                  onChange={(event) =>
                                    setFieldValue("brand", event.target.value)
                                  }
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="model"
                                  className="text-blue-400"
                                >
                                  Model
                                </label>
                                <Field
                                  className="p-2 rounded-lg bg-transparent outline-blue-200 border w-full"
                                  type="text"
                                  id="model"
                                  name="model"
                                  value={values.model}
                                  onChange={(event) =>
                                    setFieldValue("model", event.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <div className="mb-3">
                              <label htmlFor="price" className="text-blue-400">
                                Fiyat
                              </label>
                              <Field
                                className="p-2 rounded-lg bg-transparent outline-blue-200 border w-full"
                                type="number"
                                id="price"
                                name="price"
                                value={values.price}
                                onChange={(event) =>
                                  setFieldValue("price", event.target.value)
                                }
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="info" className="text-blue-400">
                                Açıklama
                              </label>
                              <Field
                                as="textarea"
                                type="text"
                                id="info"
                                name="info"
                                className="p-2 rounded-lg bg-transparent outline-blue-200 border w-full"
                                value={values.info}
                                onChange={(event) =>
                                  setFieldValue("info", event.target.value)
                                }
                              />
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

export default ProductModal;
