import React from 'react';
import TopBar from '../components/topbar';


function LoginPage(){
    return(
        <div className= "alldiv_login" >
            <TopBar />
            <form>
                <div className='container'>
                    <h1>Log in</h1>

                   
                    <input type="text" placeholder="Enter License ID" name="License ID" required></input>
                    <br></br>
                    

                   
                    <input type="text" placeholder="Enter Hospital" name="Hospital" required></input>
                    <br></br>
                    

                    <input type="text" placeholder="Enter Password" name="Password" required></input>
                    <br></br>
                    <br></br>
                    

                    <a href="/records" className="sub_btn">Login</a> 


                </div>
            </form>

           
        </div>
    );
} 

export default LoginPage;