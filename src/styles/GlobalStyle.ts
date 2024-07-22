import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import 'public/assets/font/font.css';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: 'Pretendard';
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
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
