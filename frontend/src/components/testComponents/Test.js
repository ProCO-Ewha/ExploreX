import React, { useState } from 'react';
import axios from 'axios';
import "/Users/eunseo-ko/ExploreX/frontend/src/styles/MyPage.css";

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
        <div className="test-container">
            <h2>React - Spring Boot Communication Test</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <h3>INPUT: </h3>
                    <input type="text" value={inputText} onChange={handleChange} />
                </label>
                <button type="submit">SUBMIT</button>
            </form>
            <div>
                <h3>ECHOED OUTPUT:</h3>
                <p>{result}</p>
            </div>
        </div>
    );
}

export default Test;
