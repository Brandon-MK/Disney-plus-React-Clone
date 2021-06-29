import React from "react";
import styled from "styled-components";

function LoginForm() {
  return (
    <Container>
      <Content>
        <img src="/images/logo.svg" />
        <Form>
          <Label>Enter your email</Label>
          <Input placeholder="Email" />
          <Label>Enter your password</Label>
          <Input placeholder="Password" />
          <Login href="/">Login</Login>
          <Forgot>Forgot your password?</Forgot>
        </Form>
      </Content>
    </Container>
  );
}

export default LoginForm;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const Content = styled.div`
  width: 30%;
  height: 50%;
  padding-top: 30px;
  padding-bottom: 20px;
`;

const Label = styled.h2``;

const Input = styled.input`
  background: #616369;
  border: none;
  height: 50px;
  padding: 0 5px;
  font-size: 20px;
  &:placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: red;
    opacity: 1; /* Firefox */
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: red;
  }

  &:-ms-input-placeholder {
    /* Microsoft Edge */
    color: red;
  }
`;

const Form = styled.div`
  display: flex;

  flex-direction: column;
`;

const Login = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 50px;
  margin-bottom: 12px;
  text-decoration: none;

  &:hover {
    background: #0483ee;
  }
`;

const Forgot = styled.a`
  color: #0483ee;
`;
