import Styled from 'styled-components';

export const Wrapper = Styled.div`
.logo {
    width: 110px;
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

.productWrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2em 1em;
}

.product {
    background: #fff;
    padding: 7px;
    border-radius: 9px;
}

.productDescription {
    display: flex;
    justify-content: space-between;
}

.price {
    font-weight: 600;
    margin-top: .5em;
}

`;