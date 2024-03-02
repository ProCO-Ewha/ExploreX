import React, { useState } from 'react';
import '/Users/eunseo-ko/ExploreX/frontend/src/styles/SignUp.css';

const SignUp = () => {
    // 회원가입에 필요한 상태 변수들
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    // 회원가입 양식 제출 핸들러
    const handleSubmit = (e) => {
        e.preventDefault();
        // 여기에 회원가입 로직을 추가하면 됩니다.
        setIsSubmitted(true);
    };

    return (
        <div className="signup-form"> {/* CSS 클래스 추가 */}
            <h2>Create account</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Your name</label>
                    <input
                        placeholder="Enter your name"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        placeholder="Enter your email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>ID</label>
                    <input
                        placeholder="Enter your ID (Student number)"
                        type="id"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        placeholder="Enter your password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Re-enter password</label>
                    <input
                        placeholder="Re-enter your password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Continue</button>
            </form>
            {isSubmitted && <p>Registration completed!</p>}
        </div>
    );
};

export default SignUp;
