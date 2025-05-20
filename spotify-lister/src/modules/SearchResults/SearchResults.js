import React from 'react';

import "./SearchResults.css";

import TrackList from '../TrackList/Tracklist';

function SearchResults(props){

    return(
        <div className="SearchResults">
            <h2>Search Results</h2>
            <TrackList tracks={props.SearchResults} onAdd={props.onAdd} />
        </div>
    );

};

export default SearchResults;