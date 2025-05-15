import React from "react";
import Tracklist from "./modules/Tracklist";
import SearchResults from "./modules/SearchResults";
import SearchBar from "./modules/SearchBar";
import Playlist from "./modules/Playlist";
import Track from "./modules/Track";

function App() {
  

  return(
    <div>
      <header>
        Ja<span className="accentLetters">mmm</span>ing
      </header>
      <SearchBar />
      <SearchResults />
      <Playlist />
      <Tracklist />
      <Track />
    </div>
    
  )
}

export default App;
