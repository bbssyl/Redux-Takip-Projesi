import React from "react";
import { Button, ModalHeader, ModalBody } from "reactstrap";
import { Form, Field, ErrorMessage, Formik } from "formik";
import { useDispatch } from "react-redux";
import { resetSelectedData, updateEmployee } from "../slices/employeesSlice";

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
            dispatch(resetSelectedData());
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, values, setFieldValue }) => {
            return (
              <Form>
                <div className="mb-3">
                  <Field
                    className="form-control"
                    name="employeeFirstName"
                    value={values.employeeFirstName}
                    onChange={(event) =>
                      setFieldValue("employeeFirstName", event.target.value)
                    }
                  />
                </div>
                <div className="mb-3">
                  <Field
                    className="form-control"
                    name="employeeLastName"
                    value={values.employeeLastName}
                    onChange={(event) =>
                      setFieldValue("employeeLastName", event.target.value)
                    }
                  />
                </div>
                <div className="mb-3">
                  <Field
                    className="form-control"
                    name="employeeGender"
                    value={values.employeeGender === "e" ? "Erkek" : "Kadın"}
                    onChange={(event) =>
                      setFieldValue("employeeGender", event.target.value)
                    }
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <Field
                    className="form-control"
                    name="employeeAge"
                    value={values.employeeAge}
                    onChange={(event) =>
                      setFieldValue("employeeAge", event.target.value)
                    }
                  />
                </div>
                <div className="mb-3">
                  <Field
                    className="form-control"
                    name="employeePhone"
                    value={values.employeePhone}
                    onChange={(event) =>
                      setFieldValue("employeePhone", event.target.value)
                    }
                  />
                </div>
                <div className="mb-3">
                  <Field
                    className="form-control"
                    name="employeeEmail"
                    value={values.employeeEmail}
                    onChange={(event) =>
                      setFieldValue("employeeEmail", event.target.value)
                    }
                  />
                </div>
                <div className="mb-3">
                  <Field
                    className="form-control"
                    name="employeeAddress"
                    value={values.employeeAddress}
                    onChange={(event) =>
                      setFieldValue("employeeAddress", event.target.value)
                    }
                  />
                </div>
                <div className="mb-3">
                  <Field
                    className="form-control"
                    name="employeeStatus"
                    value={values.employeeStatus}
                    onChange={(event) =>
                      setFieldValue("employeeStatus", event.target.value)
                    }
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
