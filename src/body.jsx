import React from "react";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './body.css'
import CustomPopup from "./CustomPopup";
import Popup from "./Popup";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'


function Body (){

    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const navigate=useNavigate()

    function logout(){
        localStorage.removeItem('loggedin')
    }

    function login (event){

        var users=JSON.parse(localStorage.getItem('users'))
        var i=0;
        for (var user of users){

            if(user.email==email && user.password==password)
            {
                i++
            }
        }

        if (i==1){
            alert('Login Successful')
            localStorage.setItem('loggedin','loggedin')

            navigate('/Dashboard')
        }
        else {
            alert('Invalid Credentials')
        }
        

        event.preventDefault()
        alert('')
    }

    return <div>

        <div className="row mx-auto">
            <div className="col-md-6 mt-5">
                <img className="fb-logo" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
                <p>Facebook helps you connect and share with the people in your life.</p>
            </div>
            <div className="col-md-6 fb-login">
                <form className="bg-form">
                <input type="text" placeholder="Email address or phone number" value={email} onChange={(e)=>{setemail(e.target.value)}} />
                <input type="password" placeholder="Password" value={password} onChange={(e)=>{setpassword(e.target.value)}} />
                <button className="btn btn-primary" onClick={login}>Log In</button>
                <p><a href="#">Forgotten Password?</a></p>
                <hr/>
                {/*<button className="crea8">Create New Account</button>*/}
                <Popup/>
                </form>
                <p><span><a href="https://www.facebook.com/pages/create/?ref_type=registration_form">Create a Page</a></span> for a celebrity, brand or business.</p>
            </div>
            
        </div>

    </div>
}
export default Body