import React from 'react';
import MyPageEwhaGreenNav from "../components/myPageComponents/MyPageEwhaGreenNav";
import Settings from "../components/myPageComponents/Settings";
import UserInfo from "../components/myPageComponents/UserInfo";
import ProfileEdit from "../components/myPageComponents/ProfileEdit";
import Info from "../components/mainPageComponents/Info";
import Test from "../components/testComponents/Test";



const MyPage = () => {

    return (
        <div style={{fontFamily: 'font2'}}>

            <MyPageEwhaGreenNav/>

            <Test/>

            <Settings/>

            <UserInfo/>

            <ProfileEdit/>

            <Info/>

        </div>
    );
}

export default MyPage;
