import * as React from "react";
import '/Users/eunseo-ko/ExploreX/frontend/src/styles/MyPage.css';
import {Link} from "react-router-dom"; // CSS 파일 import

const EwhaGreenNav = () => {


    return (
        <div className="ewhaGreen-nav" style={{justifyContent: 'space-between'}}>
            <div style={{paddingLeft: '40px'}}>
                <a href="/" style={{textDecoration: 'none', color: 'inherit'}}>
                    <h4>EWHA, THE FUTURE WE CREATE</h4>
                </a>
            </div>

            <div className="bounceText" style={{
                fontSize: '95px',
                textDecoration: 'none',
                color: 'inherit',
                marginTop: '-50px',
                marginBottom: '-150px'
            }}>
                <a href="/" style={{fontSize: '95px', textDecoration: 'none', color: 'inherit'}}>
                    <h1>Voyage Vault.</h1>
                </a>
            </div>

            <div style={{display: 'flex', paddingRight: '40px'}}>
                <a href="/" style={{textDecoration: 'none', color: 'inherit'}}>
                    <h4>HOME</h4>
                </a>
                <a href="https://www.ewha.ac.kr/ewha/index.do"
                   style={{paddingLeft: '20px', textDecoration: 'none', color: 'inherit'}}>
                    <h4>EWHA</h4>
                </a>
                <Link to="/login" style={{paddingLeft: '20px', textDecoration: 'none', color: 'inherit'}}>
                    <h4>LOGIN</h4>
                </Link>
                <Link to="/mypage" style={{paddingLeft: '20px', textDecoration: 'none', color: 'inherit'}}>
                    <h4>MYPAGE</h4>
                </Link>
            </div>
        </div>
    );
}

export default EwhaGreenNav