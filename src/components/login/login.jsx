import React, { useReducer } from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "../UI/button/button";
import { Card } from "../UI/card/card";

const actionTypes = {
  CHANGE_EMAIL_VALUE: "CHANGE_EMAIL_VALUE",
  CHANGE_EMAIL_VALIDATION: "CHANGE_EMAIL_VALIDATION",
  CHANGE_PASSWORD_VALUE: "CHANGE_EMAIL_VALUE",
  CHANGE_PASSWORD_VALIDATION: "CHANGE_EMAIL_VALIDATION",
};

const useEmailReducer = (state, action) => {
  if (action.type === actionTypes.CHANGE_EMAIL_VALUE) {
    return {
      ...state,
      value: action.payload,
      isValid: false,
    };
  }
  if (action.type === actionTypes.CHANGE_EMAIL_VALIDATION) {
    return {
      ...state,
      isValid: state.value.includes("@"),
    };
  }
};

const usePasswordReducer = (state, action) => {
  if (action.type === actionTypes.CHANGE_PASSWORD_VALUE) {
    return {
      ...state,
      value: action.payload,
      isValid: false,
    };
  }
  if (action.type === actionTypes.CHANGE_PASSWORD_VALIDATION) {
    return {
      ...state,
      isValid: state.value.trim().length > 6,
    };
  }
};

export const LoginForm = ({ loginHandler }) => {
  const [emailState, dispatchEmail] = useReducer(useEmailReducer, {
    value: "",
    isValid: false,
  });

  const [passwordState, dispatchPassword] = useReducer(usePasswordReducer, {
    value: "",
    isValid: false,
  });

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    console.log("passwordState", passwordState.isValid);
    console.log("emailState", emailState.isValid);
    setFormIsValid(emailState.isValid && passwordState.isValid); //true
  }, [emailState.isValid, passwordState.isValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({
      type: actionTypes.CHANGE_EMAIL_VALUE,
      payload: event.target.value,
    });
  };
  const validateEmailHandler = () => {
    dispatchEmail({
      type: actionTypes.CHANGE_EMAIL_VALIDATION,
    });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({
      type: actionTypes.CHANGE_PASSWORD_VALUE,
      payload: event.target.value,
    });
    dispatchPassword({
      type: actionTypes.CHANGE_PASSWORD_VALIDATION,
    });
  };
  const validatePasswordHandler = () => {
    // reshil ne delat etogo
  };

  return (
    <Card>
      <form>
        <InputContainer>
          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            id="email"
            onBlur={validateEmailHandler}
            style={emailState.isValid ? null : { borderColor: "red" }}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Password</label>
          <StyledInput
            type="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            id="password"
            onBlur={validatePasswordHandler}
          />
        </InputContainer>
        <StyledBtnContainer>
          <Button
            bgColor={"success"}
            disabled={!formIsValid}
            onClick={loginHandler}
          >
            Login
          </Button>
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
  border-radius: 7px;
  padding: 10px;
`;
const StyledBtnContainer = styled.div`
  width: 100%;
  text-align: center;
`;
