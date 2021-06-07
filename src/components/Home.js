import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div.attrs((props) => {
  return {
    style: {
      margin: `calc(10rem/16)`,
      padding: `calc(10rem/16)`,
    },
  };
})`
  background: transparent;
  font-weight: 500;
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.color};
  font-family: ${(props) => props.fontFamily};
  font-size: calc(${(props) => props.fontSize}rem / 16);
  text-decoration: none;
`;

const Home = (props) => {
  return (
    <Wrapper>
      <StyledLink to="/countUp" name="">
        CountUp
      </StyledLink>
      <StyledLink to="/noteApp" name="">
        NoteApp
      </StyledLink>
    </Wrapper>
  );
};

Home.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.oneOf([
    'source-code-pro',
    'kan415typos-std',
    'monospace',
    'sans-serif',
  ]),
  fontSize: PropTypes.number,
};

Home.defaultProps = {
  color: '#8b8c8e',
  fontFamily: 'kan415typos-std',
  fontSize: 15,
};

export default Home;
