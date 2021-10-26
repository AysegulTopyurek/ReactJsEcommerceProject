import { signIn } from "../../services/authService";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signInSuccess } from "../../store/actions/auth";
import { useHistory } from "react-router";
import { Wrapper } from "../../components/login/scLogin";
import { useDispatch } from "react-redux";
import * as localStorageService from "../../services/localStorageService";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import {
  FormControlLabel,
  FormHelperText,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
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
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={formSubmit}
          >
            {(formik) => {
              const {
                values,
                handleChange,
                handleSubmit,
                errors,
                touched,
                handleBlur,
              } = formik;
              return (
                <form className="form" onSubmit={handleSubmit}>
                  <div className="inputWrapper">
                    <label>E-mail</label>
                    <TextField
                        error={errors.email && touched.email}
                        variant="standard"
                        helperText={errors.email}
                        name="email"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                  </div>
                  <div className="inputWrapper">
                    <label>Şifre</label>
                    <TextField
                        error={errors.password && touched.password}
                        variant="standard"
                        helperText={errors.password}
                        name="password"
                        type="password"
                        placeholder="********"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
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
            
                </form>
              );
            }}
          </Formik>
  
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Login;
