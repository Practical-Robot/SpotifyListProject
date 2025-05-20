import React, { useState, useCallback } from "react";

function SearchBar(props){

    const [searchWord, setSearchWord] = useState("");

    const handleWordChange = useCallback((event) => {
        setSearchWord(event.target.value);
    }, []);

    const search = useCallback(() => {
        props.onSearch(searchWord);
    }, [props.onSearch, searchWord]);

return(
    <div className="searchBar">
        <form className="searchForm">
            <input 
            id="searchBox"
            type="text"
            placeholder="Enter a Tune"
            onChange={handleWordChange}
            />
            <br/>
            <button id="searchButton" onClick={search}>Search</button>
        </form>
    </div>
)

}

export default SearchBar;