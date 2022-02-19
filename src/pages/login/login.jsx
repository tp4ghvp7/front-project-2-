import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import Rules from'./Validation rules/Rules.json';
import logo from './images/Logo.jpg';
import './login.css'

const Item = Form.Item


export default class Login extends Component {

    onFinish =values=>{
        console.log('Received values of form',values);
        const username = values['username']
        const password = values['password']
    }
    render() {
        return (
            <div className='login'>
                <div className='login-header'>
                    <img src={logo} alt="logo" />
                    <h1>React project: Web store backend</h1>
                </div>
                <div className='login-content'>
                    <h1>User Login</h1>
                    <Form onFinish={this.onFinish} className="login-form">
                        <Item name="username"
                               rules={Rules["username"]}>
                            <Input
                                prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />
                        </Item>
                        <Item name="password" rules={[{required:true,message:"Please enter password!"}]}>
                            <Input
                                prefix={<LockOutlined type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
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



/* 
1.must put username and password
2.lenth more than 4
3.full of them must be A-Z or a-z or number

*/