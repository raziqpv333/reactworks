import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Addtask from './components/Addtask'
import './App.css'
import Tasklist from './components/Tasklist'

function App() {
return(
  <>
  
  <Addtask/>
  <Tasklist/>
  </>
)
 
}

export default App
