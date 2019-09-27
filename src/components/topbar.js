import React from 'react';
import './components.css'
import Download from '../components/download.jpeg';

class TopBar extends React.Component{
    render(){
        return(
            <div className="topbar">
                <div className='topbar_left'>
                  <img src={Download} alt="img"/>
                  <h1 className="logo_h1">Health-Info</h1>
                  
                </div>
                <div className="topbar_right">
                    <ul className="menu_ul">
                        <li><a href="/">Home</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/aboutus">About Us</a></li>
                        <li><a href="/login" className="login_btn">Login</a></li>
                        <li><a href="/register" className="register_btn">Register</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default TopBar;