import React from 'react';
import TopBar from '../components/topbar';

function RecordsPage() {
    return(
        <div className="alldiv_record">
            <TopBar/>
            <form>
                <div className='container abtMain'>
                    <h1>New Patient Records</h1>



                    
                   
                    <input type="text" placeholder="Enter First Name" name="firstname" required></input>
                    <br></br>
                    <input type="text" placeholder="Enter Last Name" name="lastname" required></input>
                    <br></br>
                   
                    <input type="text" placeholder="Enter age" name="age" required></input>
                    <br></br>
                   
                    <input type="text" placeholder="Enter location" name="location" required></input>
                        <br></br>
                    
                    <input type="number" placeholder="Enter contact" name="contact" required></input>
                    <br></br>
                    <br></br>
                    <a href="/verifypage" className="sub_btn">ADD USER</a>
                    <a href="/verifypage" className="sub_btn">SEARCH</a>
                    
                </div>
            </form> 
        </div>
       
    )
}

export default RecordsPage;