import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Checkbox = () => {
    const [checkboxState, setCheckboxState] = useState({
        country: [],
        grade: [],
        language: [],
        period: [],
        dormitory: false
    });
    const [schoolList, setSchoolList] = useState([]);

    useEffect(() => {
        fetchData();
    }, [checkboxState]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/search', {
                params: checkboxState
            });
            setSchoolList(response.data);
        } catch (error) {
            console.error('학교 데이터 요청 실패:', error);
        }
    };

    const handleCheckboxChange = (type, value) => {
        setCheckboxState(prevState => ({
            ...prevState,
            [type]: value
        }));
    };

    return (
        <div className="context">
            {/* 체크박스 항목들을 렌더링 */}
            <div className="checkbox-container">
                <h3>Country</h3>
                <input type="checkbox" onChange={(e) => handleCheckboxChange('country', e.target.checked)} />
                <h3>Grade</h3>
                <input type="checkbox" onChange={(e) => handleCheckboxChange('grade', e.target.checked)} />
                <h3>Language</h3>
                <input type="checkbox" onChange={(e) => handleCheckboxChange('language', e.target.checked)} />
                <h3>Period</h3>
                <input type="checkbox" onChange={(e) => handleCheckboxChange('period', e.target.checked)} />
                <h3>Dormitory</h3>
                <input type="checkbox" onChange={(e) => handleCheckboxChange('dormitory', e.target.checked)} />
            </div>
            {/* 학교 목록 출력 */}
            <div>
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
