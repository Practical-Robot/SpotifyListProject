import React from "react";

function Playlist() {
    
    return(
    <div className="playlist">
        <form className="playForm">
            <input id="playlistField" type="text" value='Name Your Playlist'/>
            <ul>
                <li>
                    Song: Intergalactic
                    <br />
                    Artist: Beastie Boys
                    <br />
                    Album: Hello Nasty
                </li>
                <li>
                    Song: I Can Do It With a Broken Heart
                    <br />
                    Artist: Taylor Swift
                    <br />
                    Album: THE TORTURED POET
                </li>
                <li>
                    Song: Blah Blah Blah
                    <br />
                    Artist: Armin van Buuren
                    <br />
                    Album: Balance
                </li>
            </ul>

            <button id="playlistButton">Save to Spotify</button> 
        </form>
    </div>
    );
}

export default Playlist;