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
  width: calc(250rem / 16);
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

const Form = styled.form`
  border: none;
  margin: calc(5rem / 16);
`;

const InputBox = styled.input`
  border: none;
  border-radius: calc(5rem / 16);
  text-decoration: none;
  padding: calc(6rem / 16);
  margin: 0 0 calc(10rem / 16) 0;
`;

const App = (props) => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState(props.text);

  return (
    <Wrapper>
      <Title>
        The current {text} is {count}
      </Title>
      <ButtonWrapper>
        <OnButton onClick={() => setCount(count + 1)}>+1</OnButton>
        <OnButton onClick={() => setCount(0)}>reset</OnButton>
        <OnButton onClick={() => setCount(count - 1)}>-1</OnButton>
      </ButtonWrapper>
      <Form action="">
        <InputBox
          placeholder="input box"
          onChange={(e) => setText(e.target.value)}
          defaultValue={props.text}
        />
      </Form>
    </Wrapper>
  );
};

App.propTypes = {
  count: PropTypes.number,
  text: PropTypes.string,
};

App.defaultProps = {
  count: 0,
  text: 'count',
};

ReactDOM.render(<App />, document.getElementById('app'));
