import React from "react";
import styled from "styled-components";
export const Button = ({ children, disabled, onClick, bgColor }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick} bgColor={bgColor}>
      {children}
    </StyledButton>
  );
};
const StyledButton = styled.button`
 padding:10px 20px;
 background-color: ${(props) =>
   props.bgColor ? "violet" : "rgb(252, 14, 252)"};
border-radius: 20px;
border: none;
color: white;
font-size: 20px;
cursor: pointer;
:disabled{
 background-color:gray;
}
`;
