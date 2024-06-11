import './App.css';
import Navegation from './components/navegation';
import { Register } from './components/register';
import { Consult } from './components/consult';
import { Login } from './components/login.js';
import { Home } from './components/home.js';
import { Information } from './components/information.js';
import { RegisterInfo } from './components/registerInfo.js';
import { ActionLogin } from './components/actionLogin.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return ( 
        <div className = "App" >
        <Navegation / >
        <BrowserRouter >
        <        Routes >
        <Route path = "/"        element = { < Home / > }        /> 
        <Route path = "/home"        element = { < Home / > }        /> 
        <Route path = "/login"        element = { < Login / > }        /> 
        <Route path = "/register"        element = { < Register / > }        /> 
        <Route path = "/consult"        element = { < Consult / > }        /> 
        <Route path = "/information"        element = { < Information / > }        /> 
        <Route path = "/registerInfo"        element = { < RegisterInfo / > }        /> 
        <Route path = "/actionLogin"        element = { < ActionLogin / > }        /> 
        </Routes>
        </BrowserRouter> 
        </div>
    );
}

export default App;