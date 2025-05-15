import React from "react";

function SearchBar(){

return(
    <div className="searchBar">
        <form className="searchForm">
            <input 
            id="searchBox"
            name="searchBox"
            type="text"
            placeholder="Singing in the Rain"
            />
            <br/>
            <input id="searchButton" type="submit" value="Search"/>
        </form>
    </div>
)

}

export default SearchBar;