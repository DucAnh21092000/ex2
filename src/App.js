import React from "react";
import './App.css';
import {Routes,Route} from "react-router-dom";
import Login from "./pages/Login/Login";
import Update from "./pages/Update/Update";
import '../src/asset/css/App.css'
import 'antd/dist/antd.css'
import Create from "./pages/Create/Create";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Login />}> </Route>
            <Route path={'/login'} element={<Login />} ></Route>
            <Route path={'/update'} element={<Update/>}></Route>
            <Route path={'/create'} element={<Create/>}></Route>
        </Routes>

    </div>
  );
}

export default App;
