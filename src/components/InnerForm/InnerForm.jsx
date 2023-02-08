/* import { useState } from "react" */
import { Timer } from "../timer/timer"
import { Users } from "../Users/users"


export const InnerForm = (props)=>{
 return (
  <div>    
      {  props.startTimer ? <Timer maxRange={1}/>  : <Users />  }
    </div>
 )
}