import { createRef, useEffect, useRef, useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { LoginForm } from "./components/login/login";
import { Users } from "./components/Users/users";
import { Timer } from "./components/timer/timer";
import { InnerForm } from "./components/InnerForm/InnerForm";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(()=>{
  //   const res= localStorage.getItem('Auth')
  //   setIsAuthenticated(Boolean(res))
  // })
  // useEffect(()=>{
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((response)=>{
  //     return response.json()

  //   })
  //   .then((data)=>{
  //     setUsers(data)
  //   })
  //   .catch((error)=>console.error(error))
  // },[])

  const [startTimer, setStartTimer]=useState(true)

  const toggleBarVisibility =(parameter)=>{
 setStartTimer(parameter) 
  }


  const loginHandler = () => {
    setIsAuthenticated((prev) => !prev);
    console.log("true");
    
  };

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(true));
    setIsAuthenticated(true);
  }, []);

  return (
    
    <div>
       <Header toggleBarVisibility={toggleBarVisibility} isAuthenticated={isAuthenticated} loginHandler={loginHandler} />
      {isAuthenticated ? <LoginForm loginHandler={loginHandler} />  : <InnerForm startTimer={startTimer}/>}
       
    </div>
   
  
  );
}

export default App;
