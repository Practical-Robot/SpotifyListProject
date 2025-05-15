import React from "react";
import Tracklist from "./modules/Tracklist";
import SearchResults from "./modules/SearchResults";
import SearchBar from "./modules/SearchBar";
import Playlist from "./modules/Playlist";
import Track from "./modules/Track";
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
