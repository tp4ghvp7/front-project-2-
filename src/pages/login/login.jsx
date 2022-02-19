import React, { Component } from 'react';
import logo from'./images/Logo.jpg'
import './login.css'
 
export default class Login extends Component {
    render(){
        return(
            <div className='login'>
                <div className='login-header'>
                    <img src={logo} alt="logo" />
                    <h1>React project: Web store backend</h1>
                </div>
                <div className='login-content'>
                    <h1>User Login</h1>
                    <div>Form page</div>
                </div>   
            </div>                
        )
    }
}