import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
  /* =================================================== */
  /* RESET FROM JOSH COMEAU https://www.joshwcomeau.com/ */
  /* =================================================== */
  /* 1. Use a more-intuitive box-sizing model. */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  /* 2. Remove default margin for common elements */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  figure,
  blockquote,
  ul,
  ol,
  dl,
  dt,
  dd {
    margin: 0;
  }
  /* 3. Allow percentage-based heights in the application */
  html,
  body {
    height: 100%;
  }
  /* 4. Improve the typography across the site. */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  /* 5. Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }
  /* 6. Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  /* 7. Create a root stacking context */
  #root {
    isolation: isolate;
  }
  
  /* =================================================== */
  /* GLOBAL STYLES */
  /* =================================================== */
`;

export default GlobalStyles;
