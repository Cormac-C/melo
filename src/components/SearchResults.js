import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { VertCard } from "./VertCard";
import userDataContext from "../context"
import Music from "../Music";

const songs = Music.getSongs();
const albums = Music.getAlbums();

const searchSongs = (query) => {
  return Object.values(songs).filter(
    ({ title }) => title.toLowerCase().includes(query.toLowerCase())
  );
}

export function SearchResults() {
  let [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [{ playlists }] = useContext(userDataContext);
  const songResults = searchSongs(query);

  const playlistResults = Object.values(playlists).filter(
    ({ title }) => title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full pb-60">
      <h2 className="w-screen my-4">Top Results for "{ query }"</h2>
      <div className="grid grid-cols-5 gap-8">
        {
          songResults.map(({ id, title, album }) => {
            const { photo } = albums[album];
            return (
              <VertCard
                key={id}
                title={title}
                imgSrc={require(`../assets/${photo}`)}
              />
            );
          })
        }
      </div>
      { playlistResults.length ? <h2 className="my-4">Playlists</h2> : <></> }
      <div className="grid grid-cols-5 gap-8">
        { playlistResults.map(({ title }, i) => <VertCard key={i} title={title} />)}
      </div>
      { !(songResults.length || playlistResults.length) && <p>No Results :(</p> }
    </div>
  );
}
