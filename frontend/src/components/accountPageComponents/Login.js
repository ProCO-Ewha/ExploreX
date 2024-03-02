import React, { useState } from 'react';
import "/Users/eunseo-ko/ExploreX/frontend/src/styles/Login.css";
const Login = () => {
    // 로그인에 필요한 상태 변수들
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    // 로그인 양식 제출 핸들러
    const handleSubmit = (e) => {
        e.preventDefault();
        // 여기에 로그인 로직을 추가하면 됩니다.
        setIsSubmitted(true);
    };

    return (
        <div className="login-form">
            <div>
                <h2>Sign in</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="login-input-wrap">
                    <label>ID</label>
                    <input
                        placeholder="Enter your ID (Student number)"
                        type="text"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required
                    />
                </div>
                <div className="login-input-wrap">
                    <label>Password</label>
                    <input
                        placeholder="Enter your password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Continue</button>
            </form>
            {isSubmitted && (
                <p>Logged in successfully!</p>
            )}
        </div>
    );
};

export default Login;
