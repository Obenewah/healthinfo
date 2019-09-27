import React from 'react';
import TopBar from '../components/topbar';

function AboutusPage(){
    return(
        <div className= "alldiv" >
            <TopBar />
            <div className="abtSec">

            </div>

            <div className="abtMain">
                <h1 className="headH1 centre">Why Choose Us?</h1>
                <div className="centre">
                    <p>Health-Info is providing cloud-based services for electronic health records (EHR), revenue cycle management & medical billing, patient engagement, care coordination, and population health management, as well as Epocrates and other point-of-care mobile apps.</p>

                    <p>Health-Info currently works with a network of more than 160,000 providers. The EHR offers a homepage that allows users to review the daily schedule and patient information, manage orders, and view incoming lab results. </p>
                </div>
                <div className="mission"> 
                    <h5>Mission:</h5>  
                    <p>Use automated data gathering and analysis to tackle health problems.</p> 

                    <h5>Vision:</h5> 
                    <p>Make sharing of health data easly accesible.</p>
                </div>
            
            </div>
           


               
           
        </div>
    );
} 

export default AboutusPage;