import signUpAction from '../../actions/signUp';
import { signUpService } from '../../services';
import { Link } from "react-router-dom";
import React,{useState}  from 'react';
import { useHistory } from 'react-router';
import {Wrapper} from './scRegister';
import { useDispatch, useSelector } from 'react-redux';
const Register = () => {
    const signUp = useSelector((state) => state.signUp);
    console.log("signUp",signUp)
    const dispatch = useDispatch();

    const[formData,setformData]=useState({
        email:"",
        password:"",   
    })
    const history=useHistory();

   const onChangeInput=(e)=>{
       setformData({...formData,[e.target.name]:e.target.value})

    }
    const formSubmit = (e) => {
        console.log("ne geldi e",e,formData)
        e.preventDefault();
        console.log("formmmmdatas",formData);
        //dispatch(signUpAction(formData));

        signUpService(formData).then((res)=>{
            console.log("başardım",res)
            history.push("/register")
        }).catch(e=>{
            console.log("başaramadık",e)
        });

      };
return(
    <Wrapper>
    <div className="registerContainer">
      <div className="coverImg">
        <img
          src={require("../../assets/img/coverImg.png").default}
          alt="deneme"
        />
      </div>
      <div>
        <div className="formWrapper">
          <div className="registerLogo">
            <img
              src={require("../../assets/img/logo.svg").default}
              alt="deneme"
            />
          </div>
          <div className="registerBox">
          <div className="boxHeader tac">
              <h3>Üye Ol</h3>
              <p style={{fontSize: 13}}>Fırsatlardan yararlanmak için üye ol!</p>
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
              <button className="btn btn-blue">Üye Ol</button>
            </form>
            <p className="tac signIn">Hesabın var mı? <Link to={'/login'}> Giriş Yap</Link></p>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
)
}
export default Register;