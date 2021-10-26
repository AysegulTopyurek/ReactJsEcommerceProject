import { signIn } from "../../services/authService";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signInSuccess } from "../../store/actions/auth";
import { useHistory } from "react-router";
import { Wrapper } from "../../components/login/scLogin";
import { useDispatch } from "react-redux";
import * as localStorageService from "../../services/localStorageService";
import CustomFormInput from "../../lib/utilities/CustomFormInput";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import ErrorIcon from "@material-ui/icons/Error";

const Login = () => {
  const validationSchema = Yup.object({
    email: Yup.string().required("Email zorunludur").email("Hatalı email Tipi"),
    password: Yup.string()
      .required("Parola zorunludur")
      .max(20, "Maximum 20 karakter olmalı.")
      .min(8, "Minimum 8 karakter olmalı."),
  });
  const initialValues = { email: "", password: "" };
  const dispatch = useDispatch();
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState(false);
  const formSubmit = (values) => {
    signIn(values)
      .then((res) => {
        dispatch(signInSuccess(res.data));
        localStorageService.setToken(res.data.access_token);
        localStorageService.setUser(values.email);
        history.push("/");
      })
      .catch((e) => {
        setErrorMessage(true);
        const timer = setTimeout(() => {
          setErrorMessage(false);
        }, 3000);
        return () => clearTimeout(timer);
      });
  };
  return (
    <Wrapper>
      {errorMessage && (
        <div className="errorMessage">
          <div className="errorIcon">
            <ErrorIcon style={{ color: "#F77474" }} />
          </div>
          <div className="errorDescription">Email veya şifreniz hatalı.</div>
        </div>
      )}

      <div className="loginContainer d-block-mb">
        <div className="coverImg d-none-mb">
          <img
            src={require("../../assets/img/coverImg.png").default}
            alt="CoverImage"
          />
        </div>
        <div>
          <div className="formWrapper">
            <div className="loginLogo">
              <img
                src={require("../../assets/img/logo.svg").default}
                alt="Logo"
              />
            </div>
            <div className="loginBox">
              <div className="boxHeader tac">
                <h3>Giriş Yap</h3>
                <p style={{ fontSize: 13 }}>
                  Fırsatlardan yararlanmak için giriş yap!
                </p>
              </div>
              <Formik
                onSubmit={(values, formikHelpers) => formSubmit(values)}
                initialValues={initialValues}
                validationSchema={validationSchema}
              >
                {/* yanlışsa email ve şifre veya doğruysa inputlarda işlem yapsın diye preventdefaul ,form submit olduğunda sayfayı refreshlemesin diye*/}

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

                  <div className="forgetPassword">
                    <Link to={"/aboutAuthor"}>Şifremi unuttum</Link>
                  </div>
                  <button className="btn btn-blue" type="submit">
                    Giriş
                  </button>
                  <p className="tac signUp">
                    Hesabın yok mu? <Link to={"/register"}> Üye Ol</Link>
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
export default Login;
