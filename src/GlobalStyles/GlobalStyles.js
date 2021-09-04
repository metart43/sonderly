import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  line-height: 1.5;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
}
#root {
  /*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.
  */
  isolation: isolate;
}
html {
  /*
    Silence the warning about missing Reach Dialog styles
  */
  --reach-dialog: 1;
  --white: hsl(${props => props.theme.colors.white});
  --gray-100: hsl(${props => props.theme.colors.gray[100]});
  --gray-300: hsl(${props => props.theme.colors.gray[300]});
  --gray-500: hsl(${props => props.theme.colors.gray[500]});
  --gray-700: hsl(${props => props.theme.colors.gray[700]});
  --gray-900: hsl(${props => props.theme.colors.gray[900]});
  --primary-color: hsl(${props => props.theme.colors.primary});
  --secondary-color: hsl(${props => props.theme.colors.secondary});
  --backdrop-gray: hsl(${props => props.theme.colors.gray[700]} / 0.8);
}
html, body, #root {
  height: 100%;
}
`;

export default GlobalStyles;