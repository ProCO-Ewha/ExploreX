import React from 'react';
import '/Users/eunseo-ko/ExploreX/frontend/src/styles/MyPage.css';

const UserInfo = ({ name, email, joinedDate }) => {
    return (
        <div className="user-info-container">
            <h2>User Information</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Joined Date: {joinedDate}</p>
        </div>
    );
}

export default UserInfo;
