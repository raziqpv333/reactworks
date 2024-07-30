
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import { createContext, useState } from "react";
// import ReactDOM from "react-dom/client";
import { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";


// function FavoriteColor(){
//   const[color,setColor]=useState("red");

//   return(
//     <>
//     <h1> my favorite color is {color}!</h1>
//     <button type="button" onClick={()=>setColor("blue")}
//     >blue</button>
//     <button type="button" onClick={()=>setColor("green")}
//     >green</button>
//     </>
//   );
// }
// export default FavoriteColor

//updating objects and arrays instate
// function Car(){
//   const[car,setCar]=useState({
//     brand:"ford",
//     model:"mustang",
//     year:"1957",
//     color:"black"
//   });
//   const updateColor =()=>{
//     setCar (previuosState=> {
//       return{...previuosState,color:"blue"}
//     });
//   }
//   return (
//     <>
//     <h1>my {car.brand}</h1>
//     <p> 
//       it is a {car.color} {car.model} from {car.year}.
//     </p>
//     <button type="button" onClick={updateColor}>blue</button>
//     </>
//   )
// }
// export default Car

//react usecontext
// const UserContext = createContext ();

// function Component1(){
//   const [user,setUser]=useState("jessie pinkman")
//   return(
//     <>
//     <h1>{`hello ${user}!`}</h1>
//     <Component2 user={user}/>
//     </>
//   );
// }
// function Component2({user}){
//   return(
//     <>
//     <h1>Componenet 2</h1>
//     <Component3 user={user}/>
//     </>
//   );
// }
// function  Component3({user}){
//   return(
//     <>
//     <h1>Component3</h1>
//     <h2>{`hello ${user} again!`}</h2>
//     </>
//   );
// }
// export default Component1

//react usecallback

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
   
  const increment =()=> {
    setCount((c)=> c+1);
  };
  const addTodo=useCallback (() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};
export default App