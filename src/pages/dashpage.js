import React from 'react';
import TopBar from '../components/topbar';
import '../components/components.css'
import Download1 from '../images/avatar.png';
import Download2 from '../images/health summary.png';
import Download3 from '../images/questionaires.png';
import Download4 from '../images/labtest.png';
import Download5 from '../images/medication.png';
import Download6 from '../images/appointment.png';
import Download7 from '../images/message.png';
import Download8 from '../images/bill.png';
import Download9 from '../images/faq.png';


 

function DashPage() {
    return(
        <div className="alldiv_user">
            <TopBar/>
        <div>
            
       <p><img src={Download1} alt="img"/> <span>Bertha</span></p>
       <a href="/records" className='logout'>Log out</a>
        </div>
        <div className="dash_main">
        <div className="col-md">
            <a href="/summary"><img src={Download2} alt="img"/>  </a>
            <p>Health Summary</p>
        </div>

        <div className="col-md">
            <img src={Download3} alt="img"/>
            <p>Questionaires</p>
        </div>

        <div className="col-md">
            <img src={Download4} alt="img"/>
             <p>lab Test</p>
            </div>

            <div className="col-md">
            <img src={Download5} alt="img"/>
            <p>Medication</p> 
        </div>

        <div className="col-md">
            <img src={Download6} alt="img"/>
            <p>Appoinment</p>
        </div>

        <div className="col-md">
            <a href="/message"><img src={Download7} alt="img"/></a>
            <p>Messages</p>
        </div>

        <div className="col-md">
            <img src={Download8} alt="img"/>
            <p>Bills</p>
        </div>

        <div className="col-md">
            <img src={Download9} alt="img"/>
            <p>FAQs</p>
        </div>

        </div>
        </div>
    )
}

export default DashPage;