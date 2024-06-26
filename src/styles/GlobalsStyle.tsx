import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  /* SECTION - 스타일 리셋 */
  ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    input:focus {
      outline: none;
    }
    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }
    /* SECTION - 글로벌 스타일 */
    body,
    htiml{
        background: #F0F6FF;
        display:flex;
        flex-direction:colmun;
        justify-content:center;
        max-width:100vw;
        min-height:100vh;
    }
    #__next {
      display: flex;
      flex-direction: column;
      max-width: 1920px;
      min-width: 375px;
      width:100vw;
      min-height:100vh;
      font-family: Pretendard;
      font-style: normal;
    }
`;

export default GlobalStyles;
