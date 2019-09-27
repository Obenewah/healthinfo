import React from 'react';
import TopBar from '../components/topbar';

function ServicesPage(){
    return(
        <div className= "alldiv" >
            <TopBar />
            <div className="abtSec">
               
            </div>

            <div className="abtMain1">
            <div className="verify">
       <p>Hello Bertha Doctor Emmanuel Danso wants to access your health history. Verify with code 2244<br/>
        - - - -<br/></p>
        <div>
        <a href="/dashboard" className="sub_btn">Verify</a>
         <a href="/records" className="sub_btn">Reject</a>


        </div>
        </div>
                
                 
                
           
            </div>


               
           
        </div>
    );
} 

export default ServicesPage;






