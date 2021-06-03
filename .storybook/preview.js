import React from 'react';
import styled from 'styled-components';
import { Reset } from 'styled-reset';

const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    presetColors: [
      // sample code
      { color: '#ff4785', title: 'Coral' },
      'rgba(0, 159, 183, 1)',
      '#fe4a49',
    ],
  },
};

const DecorateWrapper = styled.div`
  display: flex;
  height: auto;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: auto;
`;

const decorators = [
  (Story) => {
    return (
      <>
        <Reset />
        <DecorateWrapper>
          <Story />
        </DecorateWrapper>
      </>
    );
  },
];

export { parameters, decorators };
