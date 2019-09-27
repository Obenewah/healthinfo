import React from 'react';
// import TopBar from '../components/topbar';
import '../components/components.css'
import Download from '../components/download.jpeg';

function HomePage(){
    return(
        <div className="alldiv_home" >       
           

            <div className="topbar_home">
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
                <div className="content">
                <h1 className="centre">Save Lives Today</h1>
            <p className="save1"><i>Access All Health Records Regarless of Location</i> </p>
            </div>
           
            
           
        </div>
    );
} 

export default HomePage;