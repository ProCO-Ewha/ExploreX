import React, { useState } from 'react';
import '/Users/eunseo-ko/ExploreX/frontend/src/styles/MyPage.css';

const ProfileEdit = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="profile-edit-container">
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <label>Name : </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label style={{marginLeft: '10px'}}>Email : </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" style={{marginLeft: '20px', fontFamily: 'font2'}}>SAVE CHANGES</button>
            </form>
        </div>
    );
}

export default ProfileEdit;
