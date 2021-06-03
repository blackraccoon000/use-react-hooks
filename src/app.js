import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';
import fonts from './utils/fonts';
import CountUp from './components/CountUp';
import Note from './components/Note';

const jsx = (
  <>
    <Reset />
    {fonts(document)}
    <Note />
  </>
);

ReactDOM.render(jsx, document.getElementById('app'));
