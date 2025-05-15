import React from "react";

function Playlist() {
    
    return(
    <div className="playlist">
        <form className="playForm">
            <input id="playlistField" type="text" value='Name Your Playlist'/>
            <ul>
                <li>
                    <p>
                    Song: Singing in the Rain
                    <br />
                    Artist: Dick Van Dyke
                    </p>
                    <button className='addButton'>-</button>
                </li>
                <li>
                    <p>
                    Song: Singing in the Rain
                    <br />
                    Artist: Dick Van Dyke
                    </p>
                    <button className='addButton'>-</button>
                </li>
                <li>
                    <p>
                    Song: Singing in the Rain
                    <br />
                    Artist: Dick Van Dyke
                    </p>
                    <button className='addButton'>-</button>
                </li>
                <li>
                    <p>
                    Song: Singing in the Rain
                    <br />
                    Artist: Dick Van Dyke
                    </p>
                    <button className='addButton'>-</button>
                </li>
            </ul>

            <button id="playlistButton">Save to Spotify</button> 
        </form>
    </div>
    );
}

export default Playlist;