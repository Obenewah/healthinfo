import React from 'react';
import TopBar from '../components/topbar';

function ServicesPage(){
    return(
        <div className= "alldiv" >
            <TopBar />
            <div className="abtSec">
               
            </div>

            <div className="abtMain1">
                <h1 className="headH1 centre">Our Services</h1>
                <div>

                <p>Health-Info is providing cloud-based services for electronic health records </p>
                    <ul>
                        <li>Electronic Records</li>
                        <li>Cloud Service Storage</li>
                        <li>Web Platform for Records</li>
                        <li>Secure System</li>
                    </ul>
                    
                    
                 
                
                </div>
           
            </div>


               
           
        </div>
    );
} 

export default ServicesPage;