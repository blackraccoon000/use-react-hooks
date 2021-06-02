import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: calc(1rem / 16) solid rgb(59, 59, 59);
  border-radius: calc(5rem / 16);
  background-color: rgb(191, 148, 83);
  width: auto;
`;

const Title = styled.p`
  font-size: calc(15rem / 16);
  border: none;
  color: white;
  margin: calc(10rem / 16) 0 0 0;
  width: auto;
`;

const ButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 0 0 calc(10rem / 16) 0;
`;

const OnButton = styled.button`
  background-color: white;
  border: none;
  border-radius: calc(4rem / 16);
  color: blue;
  margin: calc(5rem / 16);
`;

const App = (props) => {
  const [count, setCount] = useState(props.count);

  return (
    <Wrapper>
      <Title>The current count is {count}</Title>
      <ButtonWrapper>
        <OnButton onClick={() => setCount(count + 1)}>+1</OnButton>
        <OnButton onClick={() => setCount(0)}>reset</OnButton>
        <OnButton onClick={() => setCount(count - 1)}>-1</OnButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

App.propTypes = {
  count: PropTypes.number,
};

App.defaultProps = {
  count: 0,
};

ReactDOM.render(<App />, document.getElementById('app'));
