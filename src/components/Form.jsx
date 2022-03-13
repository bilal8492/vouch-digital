import React from 'react'
import './Form.css';
import { Input, Button, Checkbox,message } from 'antd';
import { useState } from 'react';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    if (email==='' || password==='') {
      message.error('Please enter email and password');
      return ;
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      "email": `${email}`,
      "password": `${password}`
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };
  
    fetch("https://reqres.in/api/login", requestOptions)
      .then(response => {
        if(response.ok)
        {
          message.success('Login Successful');
        }
        else{
          response.text().then(text => {
            message.error(JSON.parse(text).error);
          });
        }
      })
      .catch(error => {
        message.error(error);
        console.log('error', error)
      });
  }
  return (
    <div className='form-container'>
      <div className='welcom-title'>
        <h1 style={{ fontWeight: 'bold' }}>Welcome Back</h1>
        <span className='sub-title'>Sub-title text goes here </span>
        <form style={{ marginTop: 30 }} action="">
          <Input onChange={(e) => {
            setEmail(e.target.value)
          }} required={true} className='input' type='email' placeholder="Email Adress *" />
          <Input onChange={(e) => {
            setPassword(e.target.value)
          }} required={true} type='password' className='input' style={{ marginTop: 15 }} placeholder="Password *" />
          <Button className='btn' style={{ marginTop: 15 }} onClick={onSubmit} type="Login" block>
            Login
          </Button>
          <div className='check-forgot'>
            <Checkbox className='checkbox' >Remember Password</Checkbox>
            <span className='forgot-password'>Forgot Password?</span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form;