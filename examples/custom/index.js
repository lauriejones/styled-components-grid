import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {ServerStyleSheet, ThemeProvider} from 'styled-components';
import Grid from 'styled-components-grid';

const theme = {
  breakpoints: {
    sm: 0,
    md: 800,
    lg: 1200
  }
};

const sheet = new ServerStyleSheet();
const html = renderToStaticMarkup(sheet.collectStyles(
  <ThemeProvider theme={theme}>
    <Grid>
      <Grid.Unit width={1/6}>Awesome!</Grid.Unit>
      <Grid.Unit width={1/3}>Amazing!</Grid.Unit>
      <Grid.Unit width={{md: 1/4, lg: 1/5}}>Out of this world!</Grid.Unit>
    </Grid>
  </ThemeProvider>
));
const css = sheet.getStyleTags();

console.log(`HTML\n----------------------------------------------\n${html}\n`);
console.log(`CSS \n----------------------------------------------\n${css}\n`);