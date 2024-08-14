import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import 'public/assets/font/font.css';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    width: 100vw;
    height: 100vh;
    font-family: Pretendard, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
    background-color: #FFF;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: fit-content;
    min-height: 100%;

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
    padding: 0;
    background: none;
    border: none;
  }

  a {
    color: #141517;
    text-decoration: none
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    margin: 0;
    appearance: none;
  }
  
  input[type='number'] {
    appearance: textfield;
  }
`;

export default GlobalStyle;
