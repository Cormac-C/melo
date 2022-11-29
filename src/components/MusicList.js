import React from "react";
import { Link } from "react-router-dom";
import Music from "../Music";

const possibleSongs = Music.getSongs();

export function MusicList({ title, songs, children } = {title: "", songs: []}) {

  return (
    <div className="text-white text-left">
      {title && <h2>{ title }</h2>}
      { children }
      <div className="grid grid-cols-4 pt-6">
        <p className="text-zinc-500">Song title</p>
        <p className="text-zinc-500">Album</p>
        <p className="text-zinc-500">Date added</p>
        <p className="text-zinc-500">Duration</p>
        {songs.map(songID => (
          <React.Fragment key={songID}>
            <div className="flex pb-4">
              <img className="w-16 pr-1" src={require("../assets/bieberAlbum.png")}></img>
              <div className="flex flex-column">
                <p className="m-0">{ possibleSongs[songID].title }</p>
                <Link
                  className="text-sm text-zinc-400 decoration-zinc-400"
                  to={`/artist?artist=${possibleSongs[songID].artist}`}
                >
                  { possibleSongs[songID].artist }
                </Link>
              </div>
            </div>
            <p>{ possibleSongs[songID].album }</p>
            <p>Nov 10, 2022</p>
            <p>3:13</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
