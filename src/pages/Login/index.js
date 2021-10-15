import { signIn } from "../../services/authService";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { Wrapper } from "./scLogin";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const onChangeInput = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const formSubmit = (e) => {
    console.log("ne geldi e", e, formData);
    e.preventDefault();
    console.log("formmmmdatas", formData);
    //dispatch(signInAction(formData));
    signIn(formData)
      .then((res) => {
        console.log("başardım", res);
        history.push("/home");
      })
      .catch((e) => {
        console.log("başaramadık", e);
      });
  };
  return (
    <Wrapper>
      <div className="loginContainer">
        <div className="coverImg">
          <img
            src={require("../../assets/img/coverImg.png").default}
            alt="deneme"
          />
        </div>
        <div>
          <div className="formWrapper">
            <div className="loginLogo">
              <img
                src={require("../../assets/img/logo.svg").default}
                alt="deneme"
              />
            </div>
            <div className="loginBox">
            <div className="boxHeader tac">
                <h3>Giriş Yap</h3>
                <p style={{fontSize: 13}}>Fırsatlardan yararlanmak için giriş yap!</p>
            </div>
              <form className="form" onSubmit={formSubmit}>
                <div className="inputWrapper">
                  <label for="email">E-posta</label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    onChange={onChangeInput}
                    placeholder="email@example.com"
                  />
                </div>
                <div className="inputWrapper">
                  <label for="password">Parola</label>
                  <input
                    type="password"
                    id="password"
                    required
                    onChange={onChangeInput}
                    placeholder="********"
                  />
                </div>
                <div className="forgetPassword">
                    <Link to={'/aboutAuthor'}>Şifremi unuttum</Link>
                </div>
                <button className="btn btn-blue">Giriş</button>
              </form>
              <p className="tac signUp">Hesabın yok mu? <Link to={'/register'}> Üye Ol</Link></p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Login;
