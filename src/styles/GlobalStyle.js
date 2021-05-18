import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #380036;
        --secondary-color: #5E6973;
        --background-dark-color: #646881;
        --background-light-color: #f1f1f1;
        --border-color: #475371;
        --white-color: #fff;
        --font-light-color: #a4acc4;
        --sidebar-dark-color: #3A445D;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Rubik', sans-serif;
        font-size: 1.2rem;
    }

    body {
        background-color: var(--background-dark-color);
        color: var(--font-light-color);
    }

    a {
        font-family: inherit;
        color: inherit;
        font-size: inherit;
    }

    h1 {
        font-size: 4rem;
        color: var(--white-color);
        span{
            font-size: 4rem;
        }
    }

    span{
        color: var(--primary-color);
    }
`;

export default GlobalStyle;