import React from "react";
import styled from "styled-components";
import { Button } from "../UI/button/button";

export const Navigation = ({loginHandler,toggleBarVisibility, setIsAuthenticated})=>{
 // const [istimerStarted, setTimer] = useState(false);

const cancelLogin = ()=>{
    setIsAuthenticated(false)
localStorage.removeItem("auth")
}
 return (
  <nav>
   <Navlist>
    <li><Button onClick={()=>toggleBarVisibility(false)} >Users</Button></li>
   <li><Button onClick={()=>toggleBarVisibility(true)}>Timer</Button></li>
  <li> <Button onClick={cancelLogin}>Logout</Button></li>
  </Navlist>
  
  </nav>
 )
}
const Navlist= styled.ul`
 
 list-style: none;
 display: flex;
 width: 400px;
 justify-content: space-around;


`