import React from 'react';
import styled from 'styled-components';

import { Container } from '../../GlobalStyle';

const LoginContainer = styled.div`
  margin-top: 50px;

  h1 {
    font-size: 2rem;
    padding-bottom: 20px;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 1.4rem;
  padding: 10px 0;
`;

const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid gray;
  font-size: 1.2rem;

  :focus {
    background: white;
  }
`;

const Button = styled.button`
  display: block;
  background: maroon;
  color: white;
  width: 15%;
  padding: 7px 5%;
  margin-top: 10px;
  cursor: pointer;
  font-size: 1rrem;
`;

class Login extends React.Component {
  render() {
    return (
      <Container>
        <LoginContainer>
          <h1>Agent Login</h1>
          <form>
            <Label htmlFor="username">Agent's Username</Label>
            <Input type="text" name="username" placeholder="Username" />
            <Label htmlFor="password">Agent's password</Label>
            <Input type="text" name="password" placeholder="Password" />
            <Button type="submit">Login</Button>
          </form>
        </LoginContainer>
      </Container>
    );
  }
}

export default Login;
