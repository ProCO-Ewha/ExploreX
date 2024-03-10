import React from 'react';
import '/Users/eunseo-ko/ExploreX/frontend/src/styles/MyPage.css';

const UserInfo = ({ name, email, joinedDate }) => {
    return (
        <div className="user-info-container">
            <h2>User Information</h2>
            {/*<p>Name: {name}</p>*/}
            {/*<p>Email: {email}</p>*/}
            {/*<p>Joined Date: {joinedDate}</p>*/}
            <p>Name: 고은서</p>
            <p>Email: cannes7@ewhain.net</p>
            <p>Joined Date: 2024.03.10.SUN</p>
        </div>
    );
}

export default UserInfo;
