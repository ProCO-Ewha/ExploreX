import React, { useState } from 'react';
import "../../styles/Search.css";
import Checkbox from '../../components/searchPageComponents/Checkbox';
import NewCheckbox from "../../NewCheckbox";
import SchoolList from '../resultPageComponents/SchoolList';
import { FaSearch } from "react-icons/fa";
import axios from 'axios';

const CheckboxToSchoolListConverter = () => {
    const [displaySchoolList, setDisplaySchoolList] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [schoolList, setSchoolList] = useState([]);

    const handleButtonClick = async () => {
        try {
            const response = await axios.get('http://localhost:8080/search', {
                params: {
                    keyword: searchKeyword // 검색 키워드를 서버로 전송
                }
            });
            setSchoolList(response.data); // 서버에서 받은 학교 목록을 상태로 설정
            setDisplaySchoolList(true); // 학교 목록을 표시
        } catch (error) {
            console.error('검색에 실패했습니다:', error);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleButtonClick();
        }
    };

    const handleInputChange = (event) => {
        setSearchKeyword(event.target.value);
    };

    return (
        <div style={{ fontFamily: 'font2', fontWeight: 'bold' }}>

            <div className="search">
                <input
                    type="text"
                    placeholder="Search keywords"
                    onKeyPress={handleKeyPress}
                    onChange={handleInputChange}
                    value={searchKeyword}
                />
                <button onClick={handleButtonClick}> <FaSearch /> </button>
            </div>

            <div className="context">
                {displaySchoolList ? <SchoolList schoolList={schoolList} /> : <NewCheckbox />} {/* 학교 목록을 전달 */}
                <br />
            </div>

        </div>
    );
};

export default CheckboxToSchoolListConverter;
