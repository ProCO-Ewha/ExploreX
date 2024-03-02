import React, { useState } from 'react';
import axios from 'axios';

function Test() {
    const [inputText, setInputText] = useState('');
    const [result, setResult] = useState('');

    const handleChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/echo', { message: inputText });
            setResult(response.data);
        } catch (error) {
            console.error('에러 발생:', error);
        }
    };

    return (
        <div>
            <h1>React - Spring Boot 통신 예제</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    입력:
                    <input type="text" value={inputText} onChange={handleChange} />
                </label>
                <button type="submit">전송</button>
            </form>
            <div>
                <h2>결과:</h2>
                <p>{result}</p>
            </div>
        </div>
    );
}

export default Test;
