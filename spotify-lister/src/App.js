import React, { useState , useCallback } from "react";
import Tracklist from "./modules/TrackList/TrackList";
import SearchResults from "./modules/SearchResults/SearchResults";
import SearchBar from "./modules/SearchBar/SearchBar";
import PlayList from "./modules/PlayList/PlayList";
import Track from "./modules/Track/Track";
import body from "./styles/Style.css"

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playListName, setPlayListName] = useState("New Playlist");
  const [playListTracks, setPlayListTracks] = useState([]);

  const search = useCallback((word) => {
    Spotify.search(word).then(setSearchResults);
  }, []);

  const addTrack = useCallback(
    (track) => {
      if(playListTracks.some((savedTrack) => savedTrack.id === track.id)){
          return;
      }}, [playListTracks]);

  const removeTrack = useCallback(
    (track) => {
      setPlayListTracks((prevTracks) => 
        prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
      );
    }, []);
  
  const updatePlayListName = useCallback((name) => {
    setPlayListName(name);
  }, []);

  const savePlayList = useCallback(() => {
    const trackUris = playListTracks.map((track) => track.url);
    Spotify.savePlaylist(playListName, trackUris).then(() => {
      setPlayListName("New Playlist");
      setPlayListTracks([]);
    });
  }, [playListName, playListTracks]);

  return(
    <div className="appContainer">
      <header>
        <h1>Ja<span className="accentLetters">mmm</span>ing</h1>
         <SearchBar onSearch={search} />
      </header>
      <div className="listContainer">
      <SearchResults searchResults={searchResults} onAdd={addTrack}/>
      <Playlist 
        playListName={playListName}
        playListTracks={playListTracks}
        onNameChange={updatePlayListName}
        onRemove={removeTrack}
        onSave={savePlayList}
      />
      </div>
    </div>
    
  )
}

export default App;
