import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import 'public/assets/font/font.css';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background-color: #FFFFFF;
    font-family: 'Pretendard';
  }

  #root {
    width: 100vw;
    height: fit-content;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    color: #141517
  }

  * {
    box-sizing: border-box;
  }

  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  button {
    box-sizing: content-box;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #141517
  }
`;

export default GlobalStyle;
