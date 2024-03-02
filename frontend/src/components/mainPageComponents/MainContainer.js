import * as React from "react";
import '/Users/eunseo-ko/ExploreX/frontend/src/App.css';
import exchangeProgram from "/Users/eunseo-ko/ExploreX/frontend/src/image/exchange-program.avif";


const MainContainer = () => {


    return (
        <div className="main-container">
            <img src={exchangeProgram} alt="background" className="background-image"/>
            <div className="text-container">
                <h1>Welcome to Voyage Vault</h1>
                <p>Explore the world with us</p>
            </div>
        </div>
    );
}

export default MainContainer