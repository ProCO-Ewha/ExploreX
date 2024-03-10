import * as React from "react";
import '/Users/eunseo-ko/ExploreX/frontend/src/App.css';
import SearchPageEwhaGreenNav from "../components/searchPageComponents/SearchPageEwhaGreenNav";
import Menu from "../components/mainPageComponents/Menu";
import CheckboxToSchoolListConverter from "../components/searchPageComponents/CheckboxToSchoolListConverter";
import Info from "../components/mainPageComponents/Info";
import NewCheckbox from "../components/testComponents/NewCheckbox";
import Checkbox from "../components/searchPageComponents/Checkbox";
const SearchPage = () => {


    return (

        <div>

            <SearchPageEwhaGreenNav/>

            <Menu/>

            {/*<CheckboxToSchoolListConverter/>*/}

            <NewCheckbox/>

            {/*<Checkbox/>*/}

            <Info/>


        </div>
    );
}

export default SearchPage