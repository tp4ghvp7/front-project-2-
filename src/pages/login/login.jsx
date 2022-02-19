import React, { Component } from 'react';
import { Form, Input, Button} from 'antd';
import { UserOutlined,LockOutlined} from '@ant-design/icons';

import logo from'./images/Logo.jpg'
import './login.css'

const Item = Form.Item
 
export default class Login extends Component {
    handleSubmit = e =>{
        e.preventDefault()
        alert('')
    }

    render(){
        return(
            <div className='login'>
                <div className='login-header'>
                    <img src={logo} alt="logo" />
                    <h1>React project: Web store backend</h1>
                </div>
                <div className='login-content'>
                    <h1>User Login</h1>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                            <Input 
                                prefix={<UserOutlined style={{color:'rgba(0,0,0,.25)'}}/>}
                                placeholder="Username"
                            />
                        </Item>
                        <Item>
                            <Input 
                                prefix={<LockOutlined type="lock"style={{color:'rgba(0,0,0,.25)'}}/>}
                                type="password"
                                placeholder="Password"
                            />
                        </Item>
                        <Item>
                            <Button type="primary" htmlType='submit' className='login-form-button'>log in</Button>
                        </Item>
                    </Form>
                </div>   
            </div>                
        )
    }
}