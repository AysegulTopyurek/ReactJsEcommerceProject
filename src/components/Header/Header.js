import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../Header/scHeader";
import AddIcon from "@material-ui/icons/Add";
import PersonIcon from "@material-ui/icons/Person";
function Header({ token }) {
  return (
    <Wrapper className="navWrapper">
      <nav>
        <ul className="menu">
          <li>
            <Link to={"/"}>
              <img
                className="logo"
                src={require("../../assets/img/logo.svg").default}
                alt="logo"
              />
            </Link>
          </li>
          {token && (
            <li>
              <Link className="btn btn-babyBlue" to="/addProduct">
                <div>
                  <AddIcon />
                </div>
                <div className="d-none-mb"> Ürün ekle</div>
              </Link>
            </li>
          )}
          {token && (
            <li>
              <Link className="btn btn-babyBlue" to="/myAccount">
                <div>
                  <PersonIcon />
                </div>
                <div>Hesabım</div>
              </Link>
            </li>
          )}

          {!token && (
            <li>
              <Link className="btn btn-babyBlue" to="/login">
                Giriş yap
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </Wrapper>
  );
}
export default Header;
