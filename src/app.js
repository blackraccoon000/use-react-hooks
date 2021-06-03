import React from 'react';
import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';
import fonts from './utils/fonts';
import AppRouter from './routers/AppRouter';

const jsx = (
  <>
    <Reset />
    {fonts(document)}
    <AppRouter />
  </>
);

ReactDOM.render(jsx, document.getElementById('app'));
