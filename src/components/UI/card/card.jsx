import React from "react";
import styled from "styled-components";

 export const Card = ({children})=>{
 return (
  <Container>{children}</Container>
 )
}
const Container = styled.div`
padding:20px;
 width: 450px;
 border-radius:20px;
 margin:30px auto;
 border-radius:10px;
 box-shadow: 3px 3px violet, -1em 0 .4em violet;
`