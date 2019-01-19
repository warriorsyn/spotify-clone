import { createGlobalStyle  } from 'styled-components';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'rc-slider/assets/index.css';
const GlobalStyle = createGlobalStyle `

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        background-color: #181818;
        font-family: 'Montserrat', sans-serif;
        color: #FFF;
        overflow-x: hidden;
    }
`;

export default GlobalStyle;