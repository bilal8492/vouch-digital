import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import './Header.css';
import logo from '../assets/logo.svg';
const Header = () => {
    return (
        <div className='header'>
            <div className='logo-header'>
                <img style={{ height: 20,cursor:'pointer' }} src={logo} alt="Logo" />

            </div>
            <div className='header-btn'>
                <Button style={{ backgroundColor: '#023047', color: '#fff', borderRadius: 4, fontWeight: '500' }}>Start Free Trial</Button>
                <Button style={{ backgroundColor: '#fb8500', color: '#fff', borderRadius: 4, fontWeight: '500', marginLeft: 10, paddingLeft: 45, paddingRight: 45 }}>Login</Button>
            </div>
        </div>
    );
};
export default Header;