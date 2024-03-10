// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import "../../styles/SchoolList.css";
//
// const SchoolList = ({ searchKeyword }) => {
//     const [schools, setSchools] = useState([]);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('/api/schools');
//                 setSchools(response.data);
//             } catch (error) {
//                 console.error('Error fetching schools:', error);
//             }
//         };
//
//         fetchData();
//     }, []);
//
//     const toggleFavorite = (id) => {
//         setSchools(schools.map(school =>
//             school.id === id ? { ...school, isFavorite: !school.isFavorite } : school
//         ));
//     };
//
//     const filteredSchools = schools.filter(school =>
//         school.university.toLowerCase().includes(searchKeyword.toLowerCase())
//     );
//
//     return (
//         <div className="search-result">
//             <div className="school-list">
//                 <h2>University List</h2>
//                 <ul>
//                     {filteredSchools.map((school, index) => (
//                         <li className="school-item" key={index}>
//                             <h3 className="school-name">{school.university}</h3>
//                             <p className="school-location">국가 : {school.country}</p>
//                             <p className="school-language">수학 가능 언어권 : {school.language}</p>
//                             <p className="school-language">기숙사 : {school.housingOptions}</p>
//                             <button onClick={() => toggleFavorite(school.id)}>
//                                 {school.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//
//             <div className="favorite-schools-container">
//                 <h2>Favorite Schools</h2>
//                 <ul>
//                     {schools.filter(school => school.isFavorite).map((school, index) => (
//                         <li key={index}>
//                             <h3>{school.university}</h3>
//                             <p>국가 : {school.country}</p>
//                             <p>수학 가능 언어권 : {school.language}</p>
//                             <p>기숙사 : {school.housingOptions}</p>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };
//
// export default SchoolList;
