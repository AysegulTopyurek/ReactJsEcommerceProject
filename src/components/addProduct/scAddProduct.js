import Styled from "styled-components";

export const Wrapper = Styled.div`
body {
    font-size: 15px;
}
.logo {
    width: 110px;
}
.successMessage {
    position: absolute;
    right: 140px;
    background: #F1FFF0;
    top: 100px;
    box-shadow: 0px 3px 12px #1e36482e;
    border-radius: 8px;
    padding: 0.5em 1em;
    display:flex;
    gap: 0.5em;
    align-items: center;
}
.successDescription{
    color:#46AF32;
}

.menu {
    display: flex;
    justify-content: flex-end;
    list-style-type: none;
    padding-left: 0;
    column-gap: 1.5em;
}

.menu li:first-child {
    margin-right: auto;
}

.navWrapper {
    padding: .5em 220px;
    background: #fff;
}

.navWrapper ul {
    padding-top: 15px;
    margin: 0;
}

.catNav {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    padding-left: 0;
    font-weight: 600;
    text-transform: capitalize;
}

.catNav a {
    color: #525252;
}
.productDetail {
    display:grid;
    grid-template-columns:auto 1fr;
    column-gap: 2em;
    padding:.5em;
    background:#fff;
}

.productImage img {
    width: 500px;
    height: 537px;
    object-fit: contain;
}
.btnSet .btn-orange{
    width:50%
}
.info {
    display: grid;
    grid-template-columns: max-content auto;
    column-gap: 1em;

}

.info div {
    font-weight: bold;
    width: 150px;
    font-Size:15px;
    color:#525252;
}
.info span {
    
    width: 150px;
    font-Size:15px;
    color:#525252;
    text-transform: capitalize; 
}
.price{
    font-weight: bold;
    font-Size:25px;
    color:#525252;
}

.text {
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 1em;
    color:'#555555'
}
h1{
    font-weight: normal;
    color: #555555;
    font-size:34px
}

.descriptionWrapper {
    margin-top: .5em;
    display: flex;
    flex-direction: column;
    row-gap: 1em;
    
}

.descriptionWrapper div {
    font-weight: bold;
    font-size: 1.1em;
}

.btnSet {
    display: flex;
    column-gap: 1em;
    width: 80%;
}

.btnSet button {
    width: 100%;

}

.offerPrice {
    background-color: #f2f2f2;
    width: max-content;
    display:flex;
    column-gap: 1em;
    font-size: .9em;
    padding: .5em 1em;
    border-radius: 8px;
    box-shadow: inset 0 0 4px lightgray;
}

.center {
    display: grid;
    place-items: center;
}

.modalWrapper {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    display: grid;
    place-items: center;
    background: rgba(75, 156, 226, .7);
    z-index: 1;
}


.modal {
    padding: 1.5em;
    position: absolute;
    width: 370px;
    background-color: #fff;
    box-shadow: 0 3px 12px #1e36482e;
    border-radius: 10px;
    font-size: .9em;
}

.modalHeader {
    display: flex;
    justify-content: space-between;
    font-size: 25px;
    padding: 1em;
}

.modalBody {
    margin-bottom: 1em;
}

.center .modalHeader {
    padding-top: 0;
}

.productExcerpt {
    display: flex;
    justify-content: space-between;
    background-color: #f0f8ff;
    font-size: 13px;
    padding: 1em;
    margin-bottom: 20px;
}

.productExcerpt .left {
    display: flex;
    column-gap: 1em;
}

.productExcerpt .left img {
    width: 50px;
}

.radioWrapper {
    border: 1px solid lightgray;
    border-radius: 8px;
    margin: 10px 0;
    display: flex;
    align-items: center;
    padding: 10px;
    background:${(props) => (props.active ? "babyBlue" : "white")};
}
.radioWrapper input {
    margin-bottom: 0;
}
.radioWrapper label {
    position: relative;
}
.radioWrapper label .tick{
    width: 20px;
    height: 20px;
    border: 1px solid #4B9CE2;
    background: #4B9CE2;
    border-radius: 50%;
    position: absolute;
    left: -25px;
} 
 .radioWrapper label .tick:before {
    content: "";
    position: absolute;
    height: 2px;
    width: 9px;
    background: white;
    left: -4px;
    top: -3px;
    -webkit-transform: rotate(
45deg) translate(12px,6px);
    -ms-transform: rotate(45deg) translate(12px,6px);
    transform: rotate(
45deg) translate(12px,6px);
}
.radioWrapper label .tick:after {
    content: "";
    position: absolute;
    height: 21px;
    width: 2px;
    background: white;
    left: 13px;
    top: -4px;
    -webkit-transform: rotate(
45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(
45deg);
}
.radioWrapper input{
    visibility:hidden !important;

}
.setOffer {
    padding: 10px;
    background-color: #f4f4f4;
    margin: 20px 0;
    border-radius: 8px;
    width: 100%;
}

label {
    font-size: 15px;
}

.modalBtn {
    width: 70%;
    margin: auto;
}

.radioWrapper label::before {
    content: '';
    position: absolute;
    left: -23px;
    top: 0px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #b1b1b1;
}

.textarea input {
  width: 400px;
  height: 150px;
}

.MuiFormControl-root {
  width: 100%;
}

.twoColumn {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2em;
  position: relative;
}

.twoColumn .left {
  border-right: 1px solid #eee;
  padding: 0 2em;
}

.inputColTwo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2em;
  margin: 1em 0;
}

label {
  font-size: 14px;
}

.MuiSwitch-colorSecondary.Mui-checked {
  color: skyblue;
}



.dragDrop {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 2em 0;
    border: 2px dashed #eee;
}

.saveBtn {
    position: absolute;
    right: 3em;
    bottom: 2em;
}

.right {
    padding-right: 2em;
}

`;
