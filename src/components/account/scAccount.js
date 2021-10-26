import Styled from 'styled-components';

export const Wrapper = Styled.div`
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
 .userInfo{
     padding: 1em;
    background: #fff;
    margin-top:20px;
    display:flex;
    align-items:center;
    gap:.5em
 }

 .bg-white {
     background-color: #fff;
 }

 .accountDetail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    background:#fff;
    box-shadow: 0 0 3px lightgray;
    margin: 1em;
 }
 .accountDetail .left {
    display:grid;
    grid-template-columns:auto 1fr 1fr;
    column-gap: 2em;
}

.accountDetail .right {
    display: flex;
    justify-content: space-between;
    column-gap: 1em;
}
.titleAndPrice {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.titleAndPrice h3{
    color:#555555;
    font-Size:18px;
}
.titleAndPrice .price {
    background-color: #f2f2f2;
    width: max-content;
    display:flex;
    column-gap: 1em;
    font-size: .9em;
    padding: .5em 1em;
    border-radius: 8px;
}
.productImage img {
    height: 84px;
    width: 150px;
    object-fit: contain;
}

.gray {
    color: #b1b1b1;
}

`;