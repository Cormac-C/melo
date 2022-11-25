import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import { Link, useParams } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { MainPage } from "./Middleware";
import Music from "../Music";
import UserDataContext from "../context";

const possibleSongs = Music.getSongs();

const searchSongs = (query) => {
  return Object.values(possibleSongs).filter(
    ({ title }) => title.toLowerCase().includes(query.toLowerCase())
  );
}

const selectRandSong = () => {
  const songs = Object.keys(possibleSongs);
  const index = Math.round(Math.random() * songs.length);
  return songs[index];
}

export function PlaylistPage() {
  let { id } = useParams();
  const [{ playlists }, dispatch] = useContext(UserDataContext);
  const { title, songs } = playlists[id];

  const addRandomSong = () => {
    const song = selectRandSong();
    dispatch({type: 'add-song', playlist: id, song});
  }

  return (
    <MainPage>
      <div className="text-white text-left">
        <h2>{ title }</h2>
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
            className="rounded-full border px-3 border-purple-light bg-transparent"
            onClick={addRandomSong}
          >
            ADD SONGS FOR ME
          </button>
        </div>
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
    </MainPage>
  );
}
