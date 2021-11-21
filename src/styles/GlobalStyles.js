import { createGlobalStyle } from 'styled-components/macro';
import { COLORS, WEIGHTS, QUERIES } from '../utils/constants';

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
  :root {
    /* PRIMARY COLORS */
    --color-primary-red: hsl(${COLORS.primary.red});
    --color-primary-yellow: hsl(${COLORS.primary.yellow});
    --color-primary-desaturated-cyan: hsl(${COLORS.primary.desaturatedCyan});
    --color-primary-dark-cyan: hsl(${COLORS.primary.darkCyan});
    --color-primary-dark-blue: hsl(${COLORS.primary.darkBlue});
    
    /* NEUTRAL COLORS */
    --color-neutral-white: hsl(${COLORS.neutral.white});
    --color-neutral-sd-desat-blue: hsl(${
      COLORS.neutral.superDarkDesaturatedBlue
    });
    --color-neutral-sd-gray-blue: hsl(${COLORS.neutral.superDarkGrayBlue});
    --color-neutral-d-gray-blue: hsl(${COLORS.neutral.darkGrayBlue});
    --color-neutral-gray-blue: hsl(${COLORS.neutral.grayBlue});

    /* TEXT STYLES */
    --system-font-stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --font-body: 'Barlow';
    --font-heading: 'Fraunces';
  }

  html, body, #root {
    height: 100%;
  }

  body {
    --text-color: var(--color-color-neutral-d-gray-blue);
    --bg-color: var(--color-neutral-white);

    background: var(--bg-color);
    color: var(--text-color);
    font-family: var(--system-font-stack), var(--font-body);
    font-weight: ${WEIGHTS.normal};
    font-size: calc(${18 / 16}rem);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: ${WEIGHTS.bold};
  }
`;

export default GlobalStyles;
