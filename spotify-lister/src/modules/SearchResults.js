import React from 'react';

function SearchResults(){

    return(
        <div className="searchResults">
            <div id='resultsTitle'>Search Results</div>
            <ul>
                <li>
                    <p>
                    Song: Singing in the Rain
                    <br />
                    Artist: Dick Van Dyke
                    </p>
                    <button className='addButton'>+</button>
                </li>
                <li>
                    <p>
                    Song: Singing in the Rain
                    <br />
                    Artist: Dick Van Dyke
                    </p>
                    <button className='addButton'>+</button>
                </li>
                <li>
                    <p>
                    Song: Singing in the Rain
                    <br />
                    Artist: Dick Van Dyke
                    </p>
                    <button className='addButton'>+</button>
                </li>
                <li>
                    <p>
                    Song: Singing in the Rain
                    <br />
                    Artist: Dick Van Dyke
                    </p>
                    <button className='addButton'>+</button>
                </li>
            </ul>

        </div>
    )

}

export default SearchResults;