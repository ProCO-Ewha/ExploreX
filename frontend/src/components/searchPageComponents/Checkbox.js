import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Checkbox = () => {
    const [checkboxState, setCheckboxState] = useState({
        country: [],
        grade: [],
        language: [],
        dormitory: []
    });
    const [schoolList, setSchoolList] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/search', checkboxState);
            setSchoolList(response.data);
        } catch (error) {
            console.error('학교 데이터 요청 실패:', error);
        }
    };

    const handleCheckboxChange = (type, value, option) => {
        setCheckboxState(prevState => ({
            ...prevState,
            [type]: value ? [...prevState[type], option] : prevState[type].filter(item => item !== option)
        }));
    };

    const handleSubmit = () => {
        fetchData();
    };

    const checkboxOptions = {
        country: [
            'Australia',
            'Austria',
            'Belgium',
            'Canada',
            'China',
            'Denmark',
            'Finland',
            'France',
            'Germany',
            'Hong Kong',
            'Italy',
            'Japan',
            'Lithuania',
            'Norway',
            'Singapore',
            'Spain',
            'Sweden',
            'Switzerland',
            'Taiwan',
            'The Netherlands',
            'United Kingdom',
            'USA',
            'Worldwide'
        ],
        grade: [
            '2.5',
            '3',
            '0',
            '1',
            '2.75',
            '3.3',
            '3.33',
            '2',
            '2.8',
            '2.7',
            '1.5',
            '3.5',
            '2.3'
        ],
        language: [
            '네덜란드어권',
            '노르웨이어권',
            '덴마크어권',
            '독일어권',
            '리투아니아어권',
            '불어권',
            '스웨덴어권',
            '스페인어권',
            '영어권',
            '이탈리아어권',
            '일어권',
            '중어권',
            '핀란드어권'
        ],
        dormitory: [
            'An official score report from one of the following: i.',
            'Depending on Campus',
            'Guaranteed but only for female students',
            'Guaranteed for full year students',
            'Guaranteed, and students do not need to apply',
            'Guaranteed, but students need to apply',
            'Guaranteed,but students need to apply. Application must be submitted on time and meets all the housing requirements within the time frame provided by on-campus housing',
            'No campus housing but we will give students a list of private housing to consider and apply by themselves',
            'Not guaranteed, but students can apply',
            'Students need to find their own housing by themselves.',
            'Students need to find their own housing by themselves. Incoming coordinator can provide all available links and contacts by request.',
            'The student will be supported in search for accommodation by Ca’ Foscari University Housing Office.',
            'Varies by location; Guaranteed on Exchange and students may or may not need to apply; Usually guaranteed on Direct however some programs do not include housing',
            'We have an intermediary service which can help students in finding a private accommodation.'
        ]
    };


    return (
        <div className="context">
            <div className="checkbox-container">
                <h2>Country</h2>
                {checkboxOptions.country.map((option, index) => (
                    <label key={index}>
                        <input
                            type="checkbox"
                            onChange={(e) => handleCheckboxChange('country', e.target.checked, option)}
                            value={option}
                        />
                        {option}
                    </label>
                ))}
                <h2>Grade</h2>
                {checkboxOptions.grade.map((option, index) => (
                    <label key={index}>
                        <input
                            type="checkbox"
                            onChange={(e) => handleCheckboxChange('grade', e.target.checked, option)}
                            value={option}
                        />
                        {option}
                    </label>
                ))}
                <h2>Language</h2>
                {checkboxOptions.language.map((option, index) => (
                    <label key={index}>
                        <input
                            type="checkbox"
                            onChange={(e) => handleCheckboxChange('language', e.target.checked, option)}
                            value={option}
                        />
                        {option}
                    </label>
                ))}
                <h2>Dormitory</h2>
                {checkboxOptions.dormitory.map((option, index) => (
                    <label key={index}>
                        <input
                            type="checkbox"
                            onChange={(e) => handleCheckboxChange('dormitory', e.target.checked, option)}
                            value={option}
                        />
                        {option}
                    </label>
                ))}
            </div>

            <div>
                <button onClick={handleSubmit}>Submit</button>
                <h2>School List</h2>
                <ul>
                    {schoolList.map((school, index) => (
                        <li key={index}>{school.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Checkbox;
