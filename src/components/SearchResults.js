import React, { useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SongVertCard } from "./SongVertCard";
import { VertCard } from "./VertCard";
import userDataContext from "../context"
import Music from "../Music";

const songs = Music.getSongs();

const searchSongs = (query) => {
  return Object.values(songs).filter(
    ({ title }) => title.toLowerCase().includes(query.toLowerCase())
  ).map(({ id }) => id);
}

export function SearchResults() {
  let [searchParams] = useSearchParams();
  const [{ playlists }, dispatch] = useContext(userDataContext);
  const query = searchParams.get("q");
  const songResults = searchSongs(query);

  const playMusic = (songID) => {
    const index = songResults.findIndex(id => id === songID);
    dispatch({ type: 'set-queue', songs: songResults });
    dispatch({ type: 'play-song', index });
  }

  const playlistResults = Object.entries(playlists).filter(
    ([id, { title }]) => title.toLowerCase().includes(query.toLowerCase())
  );
  const playlistIDs = Object.keys(Object.fromEntries(playlistResults));

  return (
    <div className="w-full">
      <h2 className="w-screen my-4">Top Results for "{ query }"</h2>
      <div className="grid grid-cols-fill-7 sm:grid-cols-fill-15 gap-8">
        {songResults.map((id) => <SongVertCard key={id} songID={id} onClick={playMusic}/>)}
      </div>
      { playlistResults.length ? <h2 className="my-4">Playlists</h2> : <></> }
      <div className="grid grid-cols-fill-7 sm:grid-cols-fill-15 gap-8">
        { playlistIDs.map((id) => (
          <Link className="no-underline" to={`/list/${id}`}>
            <VertCard key={id} title={playlists[id].title} />
          </Link>
        ))}
      </div>
      { !(songResults.length || playlistResults.length) && <p>No Results :(</p> }
    </div>
  );
}
