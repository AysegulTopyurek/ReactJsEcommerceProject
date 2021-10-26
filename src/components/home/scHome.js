import Styled from 'styled-components';

export const Wrapper = Styled.div`
.logo {
    width: 110px;
}
 .loading{
     display:flex;
     flex-direction:column;
     align-items:center;
     justify-content:center;
     padding:5em;
     margin:auto
 }
 .spaceX{
     background:transparent
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
.brand {
    text-transform: capitalize;
    font-size:15px;
}
.variant{
    text-transform: capitalize;
    color:#3e3e3e;
    font-size:13px;
}

.productWrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2em 1em;
    margin-bottom:6em;
}

.product {
    background: #fff;
    padding: 7px;
    border-radius: 9px;
}
.productImage{
    width:100%;
    height:200px;
    object-fit:contain
}
.productDescription {
    display: flex;
    justify-content: space-between;
}

.price {
    font-weight: 600;
    margin-top: .5em;
    color:#3e3e3e;
    font-size:18px;

}


`;