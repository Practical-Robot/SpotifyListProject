import React from "react";
import Tracklist from "./modules/Tracklist";


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
