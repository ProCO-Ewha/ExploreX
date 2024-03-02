import * as React from "react";
import '/Users/eunseo-ko/ExploreX/frontend/src/styles/MyPage.css';
import {Link} from "react-router-dom";


const SearchPageEwhaGreenNav = () => {


    return (
        <div className="ewhaGreen-nav" style={{justifyContent: 'space-between'}}>
            <div style={{paddingLeft: '40px'}}>
                <a href="/" style={{textDecoration: 'none', color: 'inherit'}}>
                    <h4>EWHA, THE FUTURE WE CREATE<br/>VOYAGE VAULT.</h4>
                </a>
            </div>

            <div>
                <h1 style={{marginLeft: '-30px', fontSize: '60px', marginTop: '15px', marginBottom: '7px'}}>
                    SEARCH PAGE
                </h1>
            </div>

            <div style={{display: 'flex', paddingRight: '40px'}}>
                <a href="/" style={{textDecoration: 'none', color: 'inherit'}}>
                    <h4>HOME</h4>
                </a>
                <a href="https://www.ewha.ac.kr/ewha/index.do"
                   style={{paddingLeft: '20px', textDecoration: 'none', color: 'inherit'}}>
                    <h4>EWHA</h4>
                </a>
                <Link to="/mypage" style={{paddingLeft: '20px', textDecoration: 'none', color: 'inherit'}}>
                    <h4>MYPAGE</h4>
                </Link>
            </div>
        </div>
    );
}

export default SearchPageEwhaGreenNav