import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import 'public/assets/font/font.css';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    width: 100vw;
    height: 100vh;
    background-color: #FFFFFF;
    font-family: 'Pretendard';
  }

  #root {
    width: 100%;
    height: fit-content;
    min-height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
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
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #141517
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

export default GlobalStyle;
