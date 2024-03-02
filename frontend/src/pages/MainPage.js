import * as React from "react";
import '../styles/MainPage.css';
import EwhaGreenNav from "../components/mainPageComponents/EwhaGreenNav";
import Menu from "../components/mainPageComponents/Menu";
import Info from "../components/mainPageComponents/Info";
import Top4Univ from "../components/mainPageComponents/Top4Univ";
import MainContainer from "../components/mainPageComponents/MainContainer";
import Test from "../components/testComponents/Test";

const MainPage = () => {

    return (
        <div>
            <Test/>

            <EwhaGreenNav/>

            <Menu/>

            <div className="ewha"></div>

            <MainContainer/>

            <Top4Univ/>

            <br/>
            <br/>

            <Info/>

        </div>
    );
}

export default MainPage