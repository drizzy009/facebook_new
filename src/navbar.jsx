import React from "react";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './navbar.css'
import { useNavigate } from 'react-router-dom';



    
function Navbar (){

    const navigate=useNavigate()
    function logout(){
        localStorage.removeItem('loggedin')
        navigate('/')
    }
    
    return <div>
        {
                (()=>{

                    if (localStorage.getItem('loggedin'))
                    {
                        return <button  onClick={logout}>Log Out</button>
                    }
                    else{
                        return <div className="row nav">
            <div className="col-md-6">
                <h1>facebook</h1>
            </div>
            <div className="col-md-6 col-nav">
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </div>
        </div>
                    } 


                })()
            }

    </div>
}

export default Navbar