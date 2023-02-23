import React from "react";
import { Button, ModalHeader, ModalBody } from "reactstrap";
import { Form, Field, ErrorMessage, Formik } from "formik";
import { useDispatch } from "react-redux";
import { updateEmployee } from "../../slices/employeesSlice";
import { updateEmployeeSchemas } from "../../schemas/updateEmployeeSchemas";

const EmployeeModal = ({ data, handleCloseModal }) => {
  const dispatch = useDispatch();
  return (
    <>
      <ModalHeader>Çalışan Sicil - {data.employeeId}</ModalHeader>
      <ModalBody>
        <Formik
          initialValues={data}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(updateEmployee(values));
            setSubmitting(false);
          }}
          validationSchema={updateEmployeeSchemas}
        >
          {({ isSubmitting, values, setFieldValue }) => {
            return (
              <Form>
                <div className="mb-3">
                  <Field
                    className="form-control"
                    name="employeeFirstName"
                    type="text"
                    value={values.employeeFirstName}
                    onChange={(event) =>
                      setFieldValue("employeeFirstName", event.target.value)
                    }
                  />
                  <ErrorMessage
                    component="small"
                    className="text-danger fs-italic"
                    name="employeeFirstName"
                  />
                </div>
                <div className="mb-3">
                  <Field
                    className="form-control"
                    name="employeeLastName"
                    type="text"
                    value={values.employeeLastName}
                    onChange={(event) =>
                      setFieldValue("employeeLastName", event.target.value)
                    }
                  />
                  <ErrorMessage
                    component="small"
                    className="text-danger fs-italic"
                    name="employeeLastName"
                  />
                </div>
                <div className="mb-3">
                  <Field
                    className="form-control"
                    name="employeeGender"
                    type="text"
                    value={values.employeeGender === "e" ? "Erkek" : "Kadın"}
                    onChange={(event) =>
                      setFieldValue("employeeGender", event.target.value)
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
                  <Field
                    className="form-control"
                    name="employeeAge"
                    type="number"
                    value={values.employeeAge}
                    onChange={(event) =>
                      setFieldValue("employeeAge", event.target.value)
                    }
                  />
                  <ErrorMessage
                    component="small"
                    className="text-danger fs-italic"
                    name="employeeAge"
                  />
                </div>
                <div className="mb-3">
                  <Field
                    className="form-control"
                    name="employeePhone"
                    type="text"
                    value={values.employeePhone}
                    onChange={(event) =>
                      setFieldValue("employeePhone", event.target.value)
                    }
                  />
                  <ErrorMessage
                    component="small"
                    className="text-danger fs-italic"
                    name="employeePhone"
                  />
                </div>
                <div className="mb-3">
                  <Field
                    className="form-control"
                    name="employeeEmail"
                    type="email"
                    value={values.employeeEmail}
                    onChange={(event) =>
                      setFieldValue("employeeEmail", event.target.value)
                    }
                  />
                  <ErrorMessage
                    component="small"
                    className="text-danger fs-italic"
                    name="employeeEmail"
                  />
                </div>
                <div className="mb-3">
                  <Field
                    as="textarea"
                    className="form-control"
                    name="employeeAddress"
                    value={values.employeeAddress}
                    onChange={(event) =>
                      setFieldValue("employeeAddress", event.target.value)
                    }
                  />
                  <ErrorMessage
                    component="small"
                    className="text-danger fs-italic"
                    name="employeeAddress"
                  />
                </div>
                <div className="mb-3">
                  <Field
                    className="form-control"
                    name="employeeStatus"
                    value={values.employeeStatus}
                    label="Çalışan"
                    onChange={(event) =>
                      setFieldValue("employeeStatus", event.target.value)
                    }
                  />
                  <ErrorMessage
                    component="small"
                    className="text-danger fs-italic"
                    name="employeeStatus"
                  />
                </div>
                <div className="mb-3">
                  <Button color="primary" type="submit" disabled={isSubmitting}>
                    Güncelle
                  </Button>
                  <Button
                    color="secondary"
                    onClick={() => {
                      handleCloseModal();
                    }}
                  >
                    Vazgeç
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </ModalBody>
    </>
  );
};

export default EmployeeModal;