import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components4/Layout";
import Home from "./components4/Home";
import Blogs from "./components4/Blog";
import Contact from "./components4/Contact";

//data passing

// function Car(props){
//   return<h2>i am a{props.brand}!</h2>
//   }
//   function Garage(){
//     return(
//       <>
//       <h1>who live here ?</h1>
//       <Car brand="ford"/>
//       </>
//     );
//   }
// export default Garage


//passing variable
// function Car(props){
//   return<h2>i am a{props.brand}!</h2>
// }
// function Garage(){
//   const CarName="dodge"
//   return(
//     <>
//     <h1>who livin in here </h1>
//     <Car brand={CarName}/>
//     </>
//   );
// }
// export default Garage

//onclick football 
// function Football(){
//   const shoot=()=>{
//     alert ("great shot");
//   }
//   return(
//     <button onClick={shoot}> take a shoot</button>
//   );
// }
// export default Football


// //passing on argument through onclick
// function Football(){
//   const shoot=(a)=>{
//     alert(a);
//   }
//   return(
//     <button onClick={()=>shoot("goal")}>take a bow</button>
//   );
// }
// export default Football


//if condition rendering
// function Football(){
//   const shot=(a,b)=>{
//     alert(b.type);
//   }
//   return(
//     <button onClick={(event)=>shot("goal",event)}>take a freekick </button>
//   );
// }
// export default Football

//conditionla rendering
// function Goal(props){
//   const isGoal=props.isGoal;
//   if (isGoal){
//     return <MadeGoal/>;
//   }
//   return <MissedGoal/>;
// }
// export default Goal

// react lists
// function Car(props){
//   return <li>i am a {props.brand}</li>
//   }
//   function Garage(){
//     const cars=['ford','bmw','audi'];
//     return(
//       <>
//       <h1>who livin in my garage?</h1>
//       <ul>
//         {cars.map((car)=><Car brand={car}/>)}
//       </ul>

//       </>
//     );
//   }
//   export default Garage

// keys
// function Car(props){
//   return <li>i am a {props.brand}</li>;
// }
// function Garage(){
//   const cars =[
//     {id:1,brand:'ford'},
//     {id:2,brand:'bmw'},
//     {id:3,brand:'audi'},
//   ];
//   return(
//     <>
//     <h1>who living in my garage?</h1>
//     <ul>
//       {cars.map((car)=> <Car key={car.id} brand={car.brand}/>)}
//     </ul>
//     </>
//   );
// }
// export default Garage

// react router
function App(){
  return(
    <BrowserRouter>
    <Routes> 
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path="blogs" element={<Blogs />}/>
      <Route path="contact" element={<Contact />}/>
    
      </Route>
    </Routes>
    </BrowserRouter>
  );
}
export default App