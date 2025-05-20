import React, { useCallback } from "react";

import "./PlayList.css";

import TrackList from "../modules/TrackList/TrackList";

function PlayList(props) {
    
    const handleNameChange = useCallback(
        (event) => {
            props.onNameChange(event.target.value);
        },
        [props.onNameChange]
    );

    return(
    <div className="playlist">
        <form className="playForm">
            <input 
            id="playlistField" 
            type="text" 
            defaultValue={"Name Your Playlist"}/>
            <TrackList
                tracks={props.playlistTracks}
                isRemoval={true}
                onRemove={props.onRemove}
            />

            <button id="playlistButton" onClick={props.onSave}>Save to Spotify</button> 
        </form>
    </div>
    );
}

export default PlayList;