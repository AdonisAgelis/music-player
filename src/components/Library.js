import React from 'react';

import LibrarySong from './LibrarySong';

const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map(song => (
          <LibrarySong
            songs={songs}
            song={song}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
            id={song.id}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
