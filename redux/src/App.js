import "./App.css";
import React from "react";
import Register from "./component/Register";
import Login from "./component/Login";
import Task from "./component/Task";
import {Routes , Route} from "react-router-dom";


function App() {
  



  return (
    <div >
      
      
      <Routes>
        <Route excat path="/" element={<Register />} />

        <Route excat path="/Login" element={<Login />} />

        <Route excat path="/Task" element={<Task />} />
      </Routes>
      
    </div>
  );
}

export default App;
