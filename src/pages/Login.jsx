import React from 'react'

import styled from 'styled-components'

const Container=styled.div`
   width: 100vw;
   height: 100vh;
   background: linear-gradient(
     rgba(255,255,255,0.5),
     rgba(255,255,255,0.5)
     ),
     url("https://assets.pharmeasy.in/web-assets/dist/951a8017.png") center;
     display: flex;
     align-items: center;
     justify-content: center;
     
`;

const Wrapper=styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
`;

const Title=styled.h1`
  font-size: 24px;
  font-width: 300;
`;

const Form=styled.form`
  display: flex;
  flex-direction: column;
`;



const Input=styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;


const Button=styled.button`
  width: 40%
  border: none;
  padding: 15px 20px;
  background-color: #FFB6C1;
  font-color: white;
  cursor: pointer;
  font-weight: bold;
  margin-button: 10px;
`;
const Link=styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
       <Wrapper>
         <Title>Sign in</Title>
         <Form>
           <Input placeholder="username"/>
           <Input placeholder="password"/>
           <Button>Login</Button>
           <Link>Forgot Password?</Link>
           <Link>Create a new account</Link>
         </Form>
       </Wrapper>
    </Container>
  )
}

export default Login