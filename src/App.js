import React,{Component} from 'react';
import {Button,message, Switch} from 'antd';
import './App.css';
import {BrowserRouter,HashRouter,Routes,Route}from "react-router-dom"
//import page
import Login from './pages/login/login';
import Admin from './pages/admin/admin';


class App extends Component{  
  render(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/admin' element={<Admin/>}/>
        </Routes> 
      </BrowserRouter>
    )
  }
}
export default App;
