import Styled from "styled-components";

export const Wrapper = Styled.div`

background-color: #FBFBFB;
.errorMessage {
    position: absolute;
    right: 20px;
    background: #FFE5E5;
    top: 20px;
    box-shadow: 0px 3px 12px #1e36482e;
    border-radius: 8px;
    padding: 0.5em 1em;
    display:flex;
    gap: 0.5em;
    align-items: center;
}
.loginContainer {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    height: 100vh;
}

.formWrapper {
    display: grid;
    place-content: center;
    gap: 1em;
    height: 100%;
}

.loginBox {
    background-color: #fff;
    box-shadow: 0px 3px 12px #1E36480A;
    padding: 3em 5em;
}

.boxHeader {
    padding: 2em;
}

.boxHeader h3 {
    font-size: 2em;
    font-weight: 500;
    color: #525252;
    margin-bottom: 5px;
}

form {
    display: flex;
    flex-direction: column;
}

.loginLogo {
    display: flex;
    justify-content: center;
}

.coverImg {
    height: 100vh;
}

.coverImg img {
    height: 100%;
    object-fit: cover;
}

.inputWrapper {
    display: flex;
    flex-direction: column;
    gap: .4em;
}

.forgetPassword {
    font-size: .7em;
    text-align: right;
    padding: 15px;
    padding-top: 0;
    transform: translateY(-15px);
}

.forgetPassword a {
    color: #b1b1b1;
}

.signUp {
    margin: .8em;
}

`;
