import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, InputGroup, Alert } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const [isSuccess, setIsSuccess] = useState(false);
  const [rules, setRules] = useState({
    uppercase: false,
    lowercase: false,
    numberCharacter: false,
    specialCharacter: false,
    validLength: false
  });
  const rulesTitle = {
    uppercase: "At least 1 upper case letter (A-Z)",
    lowercase: "At least 1 lower case letter (a-z)",
    numberCharacter: "At least 1 number (0-9)",
    specialCharacter: "At least 1 symbol (@#$!...)",
    validLength: "Must have at least 8 characters"
  }
  
  const initialValues = {
    old_password: "",
    new_password: "",
    confirm_password: ""
  }
  
  const validationSchema = Yup.object().shape({
    old_password: Yup.string()
      .required("This field is required"),
    new_password: Yup.string()
      .required("This field is required")
      .test("uppercase-test", rulesTitle.uppercase, function (value) {
        return rules.uppercase = (/(?=.*?[A-Z])/.test(value));
      })
      .test("lowercase-test", rulesTitle.lowercase, function (value) {
        return rules.lowercase = (/(?=.*?[a-z])/.test(value));
      })
      .test("numberCharacter-test", rulesTitle.numberCharacter, function (value) {
        return rules.numberCharacter = (/(?=.*?[0-9])/.test(value));
      })
      .test("specialCharacter-test", rulesTitle.specialCharacter, function (value) {
        return rules.specialCharacter = (/(?=.*?[^\w])/.test(value));
      })
      .test("validLength-test", rulesTitle.validLength, function (value) {
        return rules.validLength = (value.length >= 8);
      })
      .max(64, "Can't be longer than 64 characters"),
    confirm_password: Yup.string()
      .required("This field is required")
      .test("confirmPassword-test", "Password must match", function (value) {
        return (this.from[0].value.new_password == value);
      })
  });
  
  const handleKeyUp = event => {
    setRules({ ...rules });
  }
  
  const handleSubmit = values => {
    setIsSuccess(true);
  }

  return (
  <div className="row">
    <div className="col-md-6"> 
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => {
          return (
            <Form onSubmit={handleSubmit} className="mb-3">
              <Form.Group className="mb-1 position-relative">
                <Form.Label for="old_password">Old Password</Form.Label>
                <Form.Control type="password" name="old_password" onBlur={handleBlur} onChange={handleChange} value={values.old_password} isInvalid={!!errors.old_password} />
                <Form.Control.Feedback type="invalid">{errors.old_password}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-1 position-relative">
                <Form.Label for="new_password">New Password</Form.Label>
                <Form.Control type="password" name="new_password" onBlur={handleBlur} onChange={handleChange} value={values.new_password} isInvalid={!!errors.new_password} onKeyUp={handleKeyUp} />
                <Form.Control.Feedback type="invalid">{errors.new_password}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-1 position-relative">
                <Form.Label for="confirm_password">Confirm Password</Form.Label>
                <Form.Control type="password" name="confirm_password" onBlur={handleBlur} onChange={handleChange} value={values.confirm_password} isInvalid={!!errors.confirm_password} />
                <Form.Control.Feedback type="invalid">{errors.confirm_password}</Form.Control.Feedback>
              </Form.Group>
              <Alert className={`mt-1 error p-1 position-fixed alert-shown"}`} show={isSuccess} variant="success">Update password success !</Alert>
              <Button className="mt-5" variant="primary" type="submit">Save</Button>
            </Form>
          );
        }}
      </Formik>
    </div>
    <div className="col-md-6">
      <p>Following types bellow :</p>
      <ul style={{paddingLeft: '18px', position: 'relative'}}>
        {Object.keys(rules).map(key => {
          return (<li className={rules[key] ? "check-list" : ""} key={key}>{rulesTitle[key]}</li>);
        })}
      </ul>
    </div>
  </div>
  );
}

export default ResetPassword;
