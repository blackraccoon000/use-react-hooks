import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: calc(1rem / 16) solid rgb(59, 59, 59);
  border-radius: calc(5rem / 16);
  background-color: rgb(191, 148, 83);
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

const CountUp = (props) => {
  console.log(props);
  const [state, setState] = useState({
    count: props.count,
    text: props.text,
  });

  return (
    <Wrapper>
      <Title>
        The current {state.text} is {state.count}
      </Title>
      <ButtonWrapper>
        <OnButton onClick={() => setState({ count: state.count + 1 })}>
          +1
        </OnButton>
        <OnButton onClick={() => setState({ count: 0 })}>reset</OnButton>
        <OnButton onClick={() => setState({ count: state.count - 1 })}>
          -1
        </OnButton>
      </ButtonWrapper>
      <Form action="">
        <InputBox
          placeholder="input box"
          onChange={(e) => setState({ text: e.target.value })}
          value={props.text}
        />
      </Form>
    </Wrapper>
  );
};

CountUp.propTypes = {
  count: PropTypes.number,
  text: PropTypes.string,
};

CountUp.defaultProps = {
  count: 0,
  text: 'count',
};

export default CountUp;
