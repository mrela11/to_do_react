import React, {useState} from "react"
import Header from "./components/header/header";
// import All from 
// import Active from  
// import Completed from
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import './App.css';
import All from "./components/all/all";
import Completed from "./components/completed/comleted";

function App() {

// const usst = [
//       {id: 2, title:'html', active: true,}, 
//       {id: 3, title:'csss', active: true,},
//       {id: 5, title:'car', active: false,},
//       {id: 4, title:'soo', active: false,},
//       {id: 1, title:'duck', active: true,},
//     ]

//     const [value, newState] = useState("")
//     const [tasks, setTasks] = useState(usst)

//     const handleClick  = (id) => {

//     const a =  tasks.find(el => el.id ===  id)
//     setTasks(el => [...el], a.active = !a.active)
    
//     }
    
//     const statusHandler = (value) => {
//       if (value == 'all'){
//         setTasks(usst)
//       }
//       if(value == 'active'){
//         setTasks(arr => arr.filter(el => el.active === false ) )  
//       }if(value == 'comleted') {
//         setTasks(usst.filter(el => el.active === true) )    
//       }
//     }

//     function removeTask (id) {
//       setTasks(arr => arr.filter(el => el.id !== id) )
//     }  

    return (
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Header/>}/>
          <Route path='/all' element={<All/>}/>
          <Route path='/active' element={<Active/>}/>
          <Route path='/completed' element={<Completed/>}/>
        </Routes>
      </BrowserRouter>
  )
}  

export default App;
          {/* <Route path="" element={<All/>}/>
          <Route path="" element={<Active/>}/>
          <Route path="" element={<Completed/>}/> */}