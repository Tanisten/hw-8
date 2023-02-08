import React from "react";
import styled from "styled-components";
import { Navigation } from "./Nav";

export const Header = ({ isAuthenticated, loginHandler, toggleBarVisibility, setIsAuthenticated}) => {
 

  localStorage.setItem("uthStorageName", "true") ;
  return (
    <StyledHeader>
      <h1>A Typical Page</h1>
      {isAuthenticated && <Navigation loginHandler= {loginHandler} toggleBarVisibility={toggleBarVisibility} setIsAuthenticated={setIsAuthenticated}/>}
   
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  padding: 20px 20px;
  background-color: #9f379f;
  color: white;
  display: flex;
  justify-content: space-between;
`;
