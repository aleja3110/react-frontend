import React from "react";

function Navegation() {
    function home_view() {
        window.location = "/"
    }

    function login_view() {
        window.location = "/login"
    }

    function register_view() {
        window.location = "/register"
    }

    return ( 
        <div id = "block" >
        <li className = "items-nav" >
            <button className = "btn-nav"        onClick = { home_view } > Home </button> 
        </li> 
        <li className = "items-nav" >
            <button className = "btn-nav"        onClick = { login_view } > Login </button> 
        </li> 
        <li className = "items-nav" >
         <button className = "btn-nav"        onClick = { register_view } > Register </button> 
        </li> 
        </div>
    )

}
export default Navegation