import React from "react";

function SearchBar(){

return(
    <div>
        <form>
        <label htmlFor="searchBox"></label>
            <input 
            id="searchBox"
            name="searchBox"
            type="text"
            placeholder="Singing in the Rain"
            />
            <input type="submit" value="Search"/>
            </form>
    </div>
)

}

export default SearchBar;