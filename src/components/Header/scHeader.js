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
.menu li a {
    display: flex;
    align-items: center;
    height: 15px
px
;
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

`;