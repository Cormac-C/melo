import React, { useContext } from "react";
import UserDataContext from "../context";
import { Song } from "../components";

export function MusicList(
  { songs, playlist } = { songs: [] }
) {
  const dispatch = useContext(UserDataContext)[1];

  const playMusic = (index) => {
    dispatch({ type: 'set-queue', songs });
    dispatch({ type: 'play-song', index });
  }

  return (
    <div className="text-white text-left">
      <div className="grid gap-y-4 sm:grid-cols-[repeat(3,1fr)_min-content_10px] sm:p-6 sm:pl-0">
        <p className="max-sm:hidden text-zinc-500">Song title</p>
        <p className="max-sm:hidden text-zinc-500">Album</p>
        {playlist ? (
          <p className="max-sm:hidden text-zinc-500">Date added</p>
        ) : (
          <p className="max-sm:hidden text-zinc-500">No of Listeners</p>
        )}
        <p className="max-sm:hidden text-zinc-500">Duration</p>
        <div/>
        {songs.map((songID, i) => (
          <Song
            key={songID}
            songID={songID}
            playlist={playlist}
            onClick={() => playMusic(i)}
          />
        ))}
      </div>
    </div>
  );
}
