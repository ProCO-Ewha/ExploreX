import React, { useState, useEffect } from 'react';
import "/Users/eunseo-ko/ExploreX/frontend/src/styles/Search.css";


import {
    universityNames, country, city, grade, language, language2, dormitory,
    websiteLinks, scheduleLinks, email, numFor1Semester, semesterStartDates, semesterEndDates, courseRestrictions
} from './const';

const universities = [];

for (let i = 0; i < universityNames.length; i++) {
    universities.push({
        universityNames: universityNames[i],
        country: country[i],
        city: city[i],
        grade: grade[i],
        language: language[i],
        language2: language2[i],
        dormitory: dormitory[i],
        websiteLinks: websiteLinks[i],
        scheduleLinks: scheduleLinks[i],
        email: email[i],
        numFor1Semester: numFor1Semester[i],
        semesterStartDates: semesterStartDates[i],
        semesterEndDates: semesterEndDates[i],
        courseRestrictions: courseRestrictions[i]
    });
}

const NewCheckbox = () => {
    const [searchInput, setSearchInput] = useState('');
    const [checkboxState, setCheckboxState] = useState({
        country: [], // 배열로 변경하여 여러 개의 항목 선택 가능하도록 함
        grade: [],
        language: [],
        language2: [],
        dormitory: []
    });
    const [filteredSchoolList, setFilteredSchoolList] = useState(universities); // universities로 변경

    useEffect(() => {
        filterSchools(); // 검색어나 체크박스 상태가 변경될 때마다 필터링 수행
    }, [searchInput, checkboxState]);

    const filterSchools = () => {
        let filteredList = universities;

        // 검색어에 해당하는 학교 필터링
        filteredList = filteredList.filter(school => school.universityNames.toLowerCase().includes(searchInput.toLowerCase()));

        // 체크박스에 따라 필터링
        Object.keys(checkboxState).forEach(key => {
            const values = checkboxState[key];
            if (values.length > 0) {
                filteredList = filteredList.filter(school => values.includes(school[key]));
            }
        });

        setFilteredSchoolList(filteredList);
    };

    const handleCheckboxChange = (type, value) => {
        setCheckboxState(prevState => ({
            ...prevState,
            [type]: prevState[type].includes(value) ? prevState[type].filter(val => val !== value) : [...prevState[type], value]
        }));
    };

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSubmit = () => {
        filterSchools();
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
        language2: [
            '영어권'
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

    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleToggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? -1 : index);
    };

    return (
        <div className="context">

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search keywords"
                    value={searchInput}
                    onChange={handleSearchInputChange}
                    style={{fontSize: "15px", width: "500px", fontFamily: "font2"}}
                />
            </div>

            <div className="checkbox-container">
                <h2>Country</h2>
                {checkboxOptions.country.map((option, index) => (
                    <label key={index}>
                        <input
                            type="checkbox"
                            onChange={() => {
                                handleCheckboxChange('country', option);
                            }}
                            checked={checkboxState.country.includes(option)}
                        />
                        {option}
                    </label>
                ))}
                <h2>Grade</h2>
                {checkboxOptions.grade.map((option, index) => (
                    <label key={index}>
                        <input
                            type="checkbox"
                            onChange={() => {
                                handleCheckboxChange('grade', option);
                            }}
                            checked={checkboxState.grade.includes(option)}
                        />
                        {option}
                    </label>
                ))}
                <h2>Language</h2>
                {checkboxOptions.language.map((option, index) => (
                    <label key={index}>
                        <input
                            type="checkbox"
                            onChange={() => {
                                handleCheckboxChange('language', option);
                            }}
                            checked={checkboxState.language.includes(option)}
                        />
                        {option}
                    </label>
                ))}
                <h2>Language2</h2>
                {checkboxOptions.language2.map((option, index) => (
                    <label key={index}>
                        <input
                            type="checkbox"
                            onChange={() => {
                                handleCheckboxChange('language2', option);
                            }}
                            checked={checkboxState.language2.includes(option)}
                        />
                        {option}
                    </label>
                ))}
                <h2>Dormitory</h2>
                {checkboxOptions.dormitory.map((option, index) => (
                    <label key={index}>
                        <input
                            type="checkbox"
                            onChange={() => {
                                handleCheckboxChange('dormitory', option);
                            }}
                            checked={checkboxState.dormitory.includes(option)}
                        />
                        {option}
                    </label>
                ))}
            </div>

            <button onClick={handleSubmit}>Submit</button>

            <div>
                <h1 style={{backgroundColor: "white", padding: "20px"}}>Filtered School List</h1>
                <ol style={{backgroundColor: "white", marginTop: "-30px", paddingLeft: "40px", padding: "30px"}}>
                    {filteredSchoolList.map((school, index) => (
                        <li key={index} style={{textAlign: "left"}}>
                            <p>
                                {school.universityNames}
                                <button onClick={() => handleToggleExpand(index)} style={{marginLeft: "10px"}}>더보기
                                </button>
                                {expandedIndex === index && (
                                    <div style={{backgroundColor: "lightgrey", margin: "5px"}}>
                                        <p>Country: {school.country}</p>
                                        <p>City: {school.city}</p>
                                        <p>Minimum grade in EWHA: {school.grade}</p>
                                        <p>Language field: {school.language} {school.language2}</p>
                                        <p>Website Links: {school.websiteLinks}</p>
                                        <p>Schedule Links: {school.scheduleLinks}</p>
                                        <p>Email: {school.email}</p>
                                        <p>1학기 파견 인원 수: {school.numFor1Semester}</p>
                                        <p>개강일: {school.semesterStartDates}</p>
                                        <p>종강일: {school.semesterEndDates}</p>
                                        <p>Course restrictions: {school.courseRestrictions}</p>
                                    </div>
                                )}
                            </p>
                        </li>
                    ))}
                </ol>
            </div>

        </div>
    );
};

export default NewCheckbox;



