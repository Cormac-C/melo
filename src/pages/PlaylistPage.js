import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { MainPage } from "./Middleware";
import Music from "../Music";
import UserDataContext from "../context";
import { SongIcon, MusicList } from "../components/MusicList";

const possibleSongs = Music.getSongs();

const selectRandSong = () => {
  const songs = Object.keys(possibleSongs);
  const index = Math.floor(Math.random() * songs.length);
  return songs[index];
};

export function PlaylistPage() {
  let { id } = useParams();
  const [{ playlists }, dispatch] = useContext(UserDataContext);
  const [query, setQuery] = useState("");
  const { title, songs } = playlists[id];

  const addRandomSong = () => {
    if (songs.length < Object.keys(possibleSongs).length) {
      do {
        var song = selectRandSong();
      } while (songs.includes(song));
      dispatch({ type: "add-to-playlist", playlist: id, song });
    }
  };

  const searchSongs = () => {
    if (query.length === 0) return [];

    const q = query.toLowerCase();
    const validEntries = Object.entries(possibleSongs).filter(
      ([id, { title, artist }]) =>
        (title.toLowerCase().includes(q) || artist.toLowerCase().includes(q))
        && !songs.includes(id)
    );
    return Object.keys(Object.fromEntries(validEntries));
  };

  return (
    <MainPage>
      <MusicList title={title} songs={songs} page="playlist">
        <p>Search for songs to add to your playlist!</p>
        <div className="flex">
          <Form className="flex !text-gray-500">
            <MdSearch className="absolute text-xl m-2" />
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 !px-9 !rounded-full !bg-zinc-800 !border-none !text-white"
              aria-label="Search"
              onKeyUp={(e) => setQuery(e.target.value)}
            />
          </Form>
          <button
            className="rounded-full border px-3 border-purple-light bg-transparent max-sm:hidden"
            onClick={addRandomSong}
          >
            ADD SONGS FOR ME
          </button>
        </div>
        <div className="flex flex-col">
          {searchSongs(query).map(song => 
            <div className="flex items-center justify-between p-6 pl-0" key={song}>
              <SongIcon songID={song} />
              <button
                className="border rounded-full px-4 py-2"
                onClick={() => dispatch({type: 'add-to-playlist', playlist: id, song})}
              >
                Add
              </button>
            </div>
          )}
        </div>
      </MusicList>
    </MainPage>
  );
}
