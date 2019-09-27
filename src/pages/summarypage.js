import React from 'react';
import TopBar from '../components/topbar';

function SummaryPage() {
    return(
        <div>
            <TopBar/>
            <form>
                <div className="container abtmain">
                    <h1>HEALTH SUMMARY OF PATIENT</h1>
                    
                    <label ><b>Health Record</b></label>
                    <input type="text" placeholder="" name="health name"  required></input><br></br>

                    <label ><b>Health Description</b></label>
                    <input type="text" placeholder="" name="health description" required></input><br></br>

                    <label ><b>Doctor Name</b></label>
                    <input type="text" placeholder="" name="doctor name" required></input><br></br>

                    <label ><b>Doctor Description</b></label>
                    <input type="text" placeholder="" name="doctor description" required></input><br></br>
                    
                   
                    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
         
                    <a href="/dashboard" className="sub_btn">upload messages</a>

                </div>
            </form>
        </div>
    )
}

export default SummaryPage;