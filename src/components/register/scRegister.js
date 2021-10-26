import Styled from 'styled-components';

export const Wrapper = Styled.div`
background-color: #FBFBFB;
.registerContainer {
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

.registerBox {
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

.registerLogo {
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

input {
    outline: 0;
    border: 0;
    background: #F4F4F4 0% 0% no-repeat padding-box;
    padding: 12px 6px;
    color: gray;
    margin-bottom: 20px;
}

input:focus {
    border: 1px solid var(--unnamed-color-f77474);

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

.signIn {
    margin: .8em;
}


`;