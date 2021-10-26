import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { Wrapper } from "../../components/register/scRegister";
import { signUpService } from "../../services/authService";
import CustomFormInput from "../../lib/utilities/CustomFormInput";
import * as localStorageService from "../../services/localStorageService";
import { signInSuccess } from "../../store/actions/auth";
import * as Yup from "yup";
import { Form, Formik } from "formik";
const Register = () => {
  const validationSchema = Yup.object({
    email: Yup.string().required("Email zorunludur").email("Hatalı email Tipi"),
    password: Yup.string()
      .required("Parola zorunludur")
      .max(20, "Maximum 20 karakter olmalı.")
      .min(8, "Minimum 8 karakter olmalı."),
  });
  const initialValues = { email: "", password: "" };
  const history = useHistory();
  const dispatch = useDispatch();

  const formSubmit = (values) => {
    signUpService(values)
      .then((res) => {
        dispatch(signInSuccess(res.data));
        localStorageService.setToken(res.data.access_token);
        localStorageService.setUser(values.email);
        history.push("/");
      })
      .catch((e) => {});
  };
  return (
    <Wrapper>
      <div className="registerContainer d-block-mb">
        <div className="coverImg d-none-mb">
          <img
            src={require("../../assets/img/coverImg.png").default}
            alt="CoverImage"
          />
        </div>
        <div>
          <div className="formWrapper">
            <div className="registerLogo">
              <img
                src={require("../../assets/img/logo.svg").default}
                alt="Logo"
              />
            </div>
            <div className="registerBox">
              <div className="boxHeader tac">
                <h3>Üye Ol</h3>
                <p style={{ fontSize: 13 }}>
                  Fırsatlardan yararlanmak için üye ol!
                </p>
              </div>

              <Formik
                onSubmit={(values, formikHelpers) => formSubmit(values)}
                initialValues={initialValues}
                validationSchema={validationSchema}
              >
                <Form className="form">
                  <div className="inputWrapper">
                    <label>E-mail</label>
                    <CustomFormInput
                      className="customFormInput"
                      type="email"
                      placeholder="Email@example.com"
                      name="email"
                    />
                  </div>
                  <div className="inputWrapper">
                    <label>Şifre</label>
                    <CustomFormInput
                      className="customFormInput"
                      type="password"
                      placeholder="********"
                      name="password"
                    />
                  </div>
                  <button className="btn btn-blue">Üye Ol</button>
                  <p className="tac signIn">
                    Hesabın var mı? <Link to={"/login"}> Giriş Yap</Link>
                  </p>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Register;
