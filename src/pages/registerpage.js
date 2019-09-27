import React from 'react';
import TopBar from '../components/topbar';
import LoginPage from '../pages/login';

function RegisterPage(){    
    return(
        <div className="alldiv_register">
            <TopBar />
            <form>
                <div className='container'>
                    <h1>Create Account</h1>

                    <input type="text" placeholder="First Name" name="firstname"  required></input><br></br>
                   

                    <input type="text" placeholder="Last Name" name="lastname" required></input><br></br>
                    

                    <input type="text" placeholder="License ID" name="licenseID" required></input>
                    <br></br>

                    <input type="text" placeholder="Hospital Name" name="hospital" required></input>
                    <br></br>

                    <input type="text" placeholder="Password" name="psw" required></input>
                    <br></br>

                    <input type="text" placeholder="Repeat Password" name="repeat-password" required></input>
                    <br></br>



                    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                    
                    <a href="/login" className="sub_btn">Register</a>
                </div>
            </form>
        </div>

    );
} 

export default RegisterPage;