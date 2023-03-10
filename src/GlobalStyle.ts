import styled,  {createGlobalStyle } from 'styled-components';
import { theme } from './theme';


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, button, input, select {
    font-family: ${theme.typography};
    font-size: 16px;
    font-weight: 400;
  }

  /* body {
    background-color: ${theme.color.background};
  } */

  h1, h2, h3, h4, h5, h6, strong {
    color: ${theme.color.textTitle};
  }

  a {
    color: ${theme.color.primary};
  }

  .react-modal-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;