import * as React from "react";
import '/Users/eunseo-ko/ExploreX/frontend/src/App.css';
import ewhaLogoWhite from "/Users/eunseo-ko/ExploreX/frontend/src/image/ewha-logo-white.png";


const Info = () => {


    return (
        <div className="info">
            <img src={ewhaLogoWhite}
                 alt="ewha-logo-white"
                 style={{width: '40px', height: '40px', marginLeft: '20px', marginRight: '20px'}}
            />
            <h5>
                52, Ewhayeodae-gil, Seodaemun-gu, Seoul 03760 Republic of Korea<br/>
                T. +82-2-3277-2114<br/><br/><br/>

                Copyright © 2024 exploreX | Powered by exploreX
            </h5>
        </div>
    );
}

export default Info