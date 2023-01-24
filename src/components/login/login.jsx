import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "../UI/button/button";
import { Card } from "../UI/card/card";



export const LoginForm = ({loginHandler}) => {
 const [enteredEmail, setEnterdEmail]= useState('')
 const [enteredPassword, setEnterdPassword]= useState('')
const [isEmailValid, setIsEmailValid]=useState(false)
const [isPasswordValid, setIsPassworValid]=useState(false)
const [formIsValid,setFormIsValid]=useState(false)


// useEffect(()=>{
//   console.log( "entered email",enteredEmail)
//   },[])


useEffect(()=>{
 setFormIsValid(isEmailValid && isPasswordValid)//true
},[isEmailValid,isPasswordValid])

 const emailChangeHandler = (e)=>{
setEnterdEmail(e.target.value)
setIsEmailValid(enteredEmail.includes("@"))
 }
 
 const passwordChangeHandler = (e)=>{
 setEnterdPassword( e.target.value)
 setIsPassworValid(enteredPassword.trim().length>=6)
 }
// const loginHandler = ()=>{

// }

  return (
    <Card>
      <form>
        <InputContainer>
          <label htmlFor="email">Email</label>
          <StyledInput type="email"
          value={enteredEmail}
          onChange={ emailChangeHandler}
          id='email'/>
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Password</label>
          <StyledInput
          type="password"
          value={enteredPassword}
          onChange={ passwordChangeHandler}
          id='password' />
        </InputContainer>
        <StyledBtnContainer>
          <Button bgColor={'success'}  disabled={!formIsValid} onClick={loginHandler}>Login</Button>
        </StyledBtnContainer>
       
      </form>
    </Card>
  );
};
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-weight: 400;

`;
const StyledInput = styled.input`
  width: 300px;
  outline: none;
  border-color: royalblue;
  border-radius: 7px;
  padding: 10px;

`;
const StyledBtnContainer = styled.div`
  width: 100%;
  text-align: center;
  
`;
