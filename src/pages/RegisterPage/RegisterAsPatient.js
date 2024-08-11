import React from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPageStyle.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import MintButton from "../../Common/MintButton";
import { registerPatientApi } from "../../api/userApi/authApi";
function RegisterAsPatient() {
  const navigate = useNavigate(); // Handle Navigation to other pages

  // Object to collect user data to send it with end-point
  var newUser = {
    user: {},
  };

  // Initial values for form fields
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    national_id: null,
    nationality: "",
    date_of_birth: "mm/dd/yyyy",
    phone_number: null,
    country: "",
    city: "",
    gender: "",
    chronic_diseases: null,
    medical_report: null,
  };

  // Validation of fom field
  const validationSchema = Yup.object({
    first_name: Yup.string().required("required"),
    last_name: Yup.string().required("required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .required("Required")
      .min(8, "Password must be at least 8 characters")
      .test(
        "strong password",
        "Your password is not strong enough",
        (value) => {
          const re = new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
          );
          return re.test(value);
        }
      ),
    national_id: Yup.number()
      .required("required")
      .test(
        "len",
        "Must be exactly 11 digits",
        (val) => val && val.toString().length === 11
      ),
    nationality: Yup.string().required("required"),
    date_of_birth: Yup.date().required("required"),
    phone_number: Yup.number()
      .required("required")
      .test(
        "len",
        "Must be exactly 11 digits",
        (val) => val && val.toString().length === 11
      ),
    country: Yup.string().min(3, "At least 3 letters").required("Required"),
    city: Yup.string().min(3, "At least 3 letters").required("required"),
    gender: Yup.string().required("Required"),
    chronic_diseases: Yup.mixed()
      .nullable()
      .notRequired()
      .test("fileFormat", "Only PDF files are accepted", (value) => {
        if (!value) return true; // Allow empty values
        return value && value.type === "application/pdf";
      }),
    medical_report: Yup.mixed()
      .nullable()
      .notRequired()
      .test("fileFormat", "Only PDF files are accepted", (value) => {
        if (!value) return true; // Allow empty values
        return value && value.type === "application/pdf";
      }),
  });

  // Handling Errors to combine them in one message
  const handleErrors = (data) => {
    const errors = [];
    for (const error in data) {
      errors.push(...data[error]);
    }
    return errors.join(" And ");
  };

  const onSubmit = async (values) => {
    console.log("Form data", values);
    for (const property in values) {
      console.log(property, values[property]);
      if (property !== "chronic_diseases" && property !== "medical_report") {
        newUser.user[`${property}`] = values[property];
      } else {
        if (values[property] !== null) {
          newUser[`${property}`] = values[property];
        }
      }
    }
    console.log(newUser);
    try {
      const response = await registerPatientApi(newUser);
      console.log(response);
      navigate("/loginPage");
    } catch (error) {
      console.log(error.message);
      console.log(error.response.data.error);
      alert(handleErrors(error.response.data.error));
    }
  };

  return (
    <div className="registerAsPatient">
      <h2 className="text-center">جــــــــــراســــــــــــــتون</h2>
      <p className="fw-bolder text-center mb-5 mt-3">Register as Patient </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className="d-flex justify-cotent-between">
              <div className="pe-2">
                <label htmlFor="first_name" className="d-block">
                  First Name
                </label>
                <Field
                  type="text"
                  id="first_name"
                  name="first_name"
                  className="d-block"
                />
                <ErrorMessage
                  name="first_name"
                  className="text-danger"
                  component="div"
                />
              </div>
              <div className="ps-2">
                <label htmlFor="last_name" className="d-block">
                  Last Name
                </label>
                <Field
                  type="text"
                  id="last_name"
                  name="last_name"
                  className="d-block"
                />
                <ErrorMessage
                  name="last_name"
                  className="text-danger"
                  component="div"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="d-block">
                Email
              </label>
              <Field type="email" id="email" name="email" className="d-block" />
              <ErrorMessage
                name="email"
                className="text-danger"
                component="div"
              />
            </div>
            <div>
              <label htmlFor="password" className="d-block">
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="d-block"
              />
              <ErrorMessage
                name="password"
                className="text-danger"
                component="div"
              />
            </div>
            <div>
              <label htmlFor="national_id" className="d-block">
                Nationality ID
              </label>
              <Field
                type="text"
                id="national_id"
                name="national_id"
                className="d-block"
              />
              <ErrorMessage
                name="national_id"
                className="text-danger"
                component="div"
              />
            </div>
            <div>
              <label htmlFor="nationality" className="d-block">
                Nationality
              </label>
              <Field
                as="select"
                type="select"
                id="nationality"
                name="nationality"
                className="d-block"
              >
                <option value="" selected disabled>
                  Choose Your Natonality...
                </option>
                <option value="Saudi arabian">Saudi Arabian</option>
                <option value="Egytion">Egytion</option>
                <option value="Algerian">Algerian</option>
              </Field>
              <ErrorMessage
                name="nationality"
                className="text-danger"
                component="div"
              />
            </div>
            <div>
              <label htmlFor="date_of_birth" className="d-block">
                Birth Of Date
              </label>
              <Field
                type="date"
                id="date_of_birth"
                name="date_of_birth"
                className="d-block"
              />
              <ErrorMessage
                name="date_of_birth"
                className="text-danger"
                component="div"
              />
            </div>
            <div>
              <label htmlFor="phone_number" className="d-block">
                Phone Number
              </label>
              <div className="d-flex justify-content-between w-100">
                <div id="phoneNumber">+966</div>
                <Field type="text" id="phone_number" name="phone_number" />
              </div>
              <ErrorMessage
                name="phone_number"
                className="text-danger"
                component="div"
              />
            </div>
            <div className="d-flex justify-content-between w-100">
              <div className="pe-2">
                <label htmlFor="country" className="d-block">
                  Country
                </label>
                <Field
                  type="text"
                  id="country"
                  name="country"
                  className="d-block"
                />
                <ErrorMessage
                  name="country"
                  className="text-danger"
                  component="div"
                />
              </div>
              <div>
                <label htmlFor="city" className="d-block">
                  City
                </label>
                <Field type="text" id="city" name="city" className="d-block" />
                <ErrorMessage
                  name="city"
                  className="text-danger"
                  component="div"
                />
              </div>
            </div>
            <div>
              <label className="d-block">Gender</label>
              <div className="d-inline-block">
                <Field
                  type="radio"
                  name="gender"
                  value="M"
                  className="ms-2 me-2"
                />{" "}
                Male
              </div>
              <div className="d-inline-block">
                <Field type="radio" name="gender" value="F" className="me-2" />{" "}
                Female
              </div>
              <ErrorMessage
                name="gender"
                className="text-danger"
                component="div"
              />
            </div>
            <div>
              <label htmlFor="chronic_diseases" className="d-block">
                Chronic Diseases (optional)
              </label>
              <input
                id="chronic_diseases"
                name="chronic_diseases"
                type="file"
                accept="application/pdf"
                onChange={(event) => {
                  setFieldValue("pdfFile", event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage
                name="chronic_diseases"
                className="text-danger"
                component="div"
              />
            </div>
            <div>
              <label htmlFor="medical_report" className="d-block">
                Medical Report (optional)
              </label>
              <input
                id="medical_report"
                name="medical_report"
                type="file"
                accept="application/pdf"
                onChange={(event) => {
                  setFieldValue("pdfFile", event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage
                name="medical_report"
                className="text-danger"
                component="div"
              />
            </div>
            <MintButton text="Register" btnType="submit" />
          </Form>
        )}
      </Formik>
      <div className="separator fw-bold fs-4">OR</div>
      <div className="loginWith">
        <div className="loginWithGoogle mb-5">Login with Google</div>
        <div className="loginWithFacebook">Login with Facebook</div>
      </div>
    </div>
  );
}
export default RegisterAsPatient;
