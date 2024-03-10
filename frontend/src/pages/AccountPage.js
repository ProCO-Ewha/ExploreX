import * as React from "react";
import ewhaWomansUniversity from "../images/ewha-womans-university.png";
import Login from "../components/accountPageComponents/Login";
import SignUp from "../components/accountPageComponents/SignUp";
import Info from "../components/mainPageComponents/Info";

function AccountPage() {

    return (
        <div>

            <div className="ewhaGreen" style={{backgroundColor: '#00462A'}}>
                <text>ㅤ<br/>ㅤ</text>
            </div>

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <a href="/" style={{display: 'flex', justifyContent: 'center'}}>
                    <img src={ewhaWomansUniversity} alt="ewha-womans-university"
                         style={{margin: '50px'}}/>
                </a>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <Login/>
                <SignUp/>
            </div>

            <br/>
            <br/>
            <br/>

            <Info/>

        </div>

    );
}

export default AccountPage;
