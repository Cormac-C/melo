import { React } from "react";
import { useSearchParams } from "react-router-dom";
import { VertCard } from "./VertCard";
import Music from "../Music";

const songs = Music.getSongs();
const albums = Music.getAlbums();

const searchSongs = (query) => {
  return Object.values(songs).filter(({ title }) => title.toLowerCase().includes(query.toLowerCase())
  );
}

export function SearchResults() {
  let [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const results = searchSongs(query);

  return (
    <div className="w-full">
      <h2 className="my-4">Top Results for "{ query }"</h2>
      {
        results.length ? results.map(({ id, title, album }) => {
          const { photo } = albums[album];
          return (
            <VertCard
              key={id}
              title={title}
              imgSrc={require(`../assets/${photo}`)}
            />
          );
        }) : (
          <p>No results :(</p>
        )
      }
    </div>
  );
}
