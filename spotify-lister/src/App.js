import React from "react";
import Tracklist from "./modules/TrackList/TrackList";
import SearchResults from "./modules/SearchResults/SearchResults";
import SearchBar from "./modules/SearchBar/SearchBar";
import Playlist from "./modules/PlayList/PlayList";
import Track from "./modules/Track/Track";
import body from "./styles/Style.css"

function App() {
  

  return(
    <div className="appContainer">
      <header>
        <h1>Ja<span className="accentLetters">mmm</span>ing</h1>
         <SearchBar />
      </header>
      <div className="listContainer">
      <SearchResults />
      <Playlist />
      </div>
    </div>
    
  )
}

export default App;
