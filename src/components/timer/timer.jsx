import { useEffect } from "react"
import { useState } from "react"
import { Card } from "../UI/card/card"

 export const Timer =({maxRange})=>{
  const [counter, setCounter]=useState(maxRange)
useEffect(()=>{
 if(counter > 0 && counter < 60 ){
  setTimeout(()=>setCounter(counter +1),1000)
 }
},[counter])

return(
  <Card>
 <div>{counter}</div>
 </Card>
)
}