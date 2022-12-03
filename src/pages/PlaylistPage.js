import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { MainPage } from "./Middleware";
import Music from "../Music";
import UserDataContext from "../context";
import { MusicList } from "../components/MusicList";

const possibleSongs = Music.getSongs();

// const searchSongs = (query) => {
//   return Object.values(possibleSongs).filter(({ title }) =>
//     title.toLowerCase().includes(query.toLowerCase())
//   );
// };

const selectRandSong = () => {
  const songs = Object.keys(possibleSongs);
  const index = Math.floor(Math.random() * songs.length);
  return songs[index];
};

export function PlaylistPage() {
  let { id } = useParams();
  const [{ playlists }, dispatch] = useContext(UserDataContext);
  const { title, songs } = playlists[id];

  const addRandomSong = () => {
    if (songs.length < Object.keys(possibleSongs).length) {
      do {
        var song = selectRandSong();
      } while (songs.includes(song));
      dispatch({ type: "add-to-playlist", playlist: id, song });
    }
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
              className="me-2 !flex-1 !px-9 !rounded-full !bg-zinc-800 !border-none !text-white"
              aria-label="Search"
            />
          </Form>
          <button
            className="rounded-full border px-3 border-purple-light bg-transparent max-sm:hidden"
            onClick={addRandomSong}
          >
            ADD SONGS FOR ME
          </button>
        </div>
      </MusicList>
    </MainPage>
  );
}
