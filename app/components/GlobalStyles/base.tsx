import { css } from '@emotion/core'
import { themeColors, colors } from '../../js/colors'

export default css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    word-break: break-word;

    :focus {
      outline: solid 1px ${colors.red};
    }
  }

  html {
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }

  body {
    display: flex;
    flex-direction: column;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${themeColors.textColor};
    text-rendering: optimizeLegibility;
    background-color: ${themeColors.bodyBackgroundColor};
  }

  /* textarea:focus,
  input:focus {
    outline: 1px solid var(--color-green);
  } */

  img {
    max-width: 100%;
    height: auto;
  }
`
