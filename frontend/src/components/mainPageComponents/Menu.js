import * as React from "react";
import '/Users/eunseo-ko/ExploreX/frontend/src/App.css';


const Menu = () => {


    return (
        <div className="menu">
            <a href="http://oia.ewha.ac.kr/oia/1136/subview.do"
               style={{paddingLeft: '200px', textDecoration: 'none', color: 'inherit'}}>
                <h4>공지사항</h4>
            </a>
            <a href="/search" style={{textDecoration: 'none', color: 'inherit'}}>
                <h4>교환교 검색</h4>
            </a>
            <a href="http://oia.ewha.ac.kr/oia/1160/subview.do"
               style={{textDecoration: 'none', color: 'inherit'}}>
                <h4>파견 보고서</h4>
            </a>
            <a href="http://oia.ewha.ac.kr/oia/index.do"
               style={{paddingRight: '200px', textDecoration: 'none', color: 'inherit'}}>
                <h4>국제교류처</h4>
            </a>
        </div>
    );
}

export default Menu