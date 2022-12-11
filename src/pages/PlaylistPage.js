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

function EditModal({ onClose, onSave }) {
  const [title, setTitle] = useState("");

  return (
    <div className="
      fixed w-screen h-screen left-0 top-0 m-0 z-30
      bg-black/50 flex justify-center items-center"
      onClick={onClose}
    >
      <div className="bg-zinc-800 p-8 space-y-6 min-w-[30%]" onClick={(e) => e.stopPropagation()}>
        <h2>Edit Playlist Details</h2>
        <Form>
          <h6>Playlist Title</h6>
          <Form.Control
            type="text"
            className="!rounded !bg-zinc-200 !border-none"
            aria-label="Playlist Title"
            onKeyUp={(e) => setTitle(e.target.value)}
          />
        </Form>
        <div className="flex justify-between pt-4">
          <button
            className="rounded-full border px-3 py-1 border-purple-light bg-transparent"
            onClick={onClose}
          >
            CANCEL
          </button>
          <button
            className="rounded-full border px-3 py-1 border-purple-light bg-transparent"
            onClick={() => {onSave(title); onClose()}}
          >
            SAVE CHANGES
          </button>
        </div>
      </div>
    </div>
  );
}

export function PlaylistPage() {
  let { id } = useParams();
  const [{ playlists }, dispatch] = useContext(UserDataContext);
  const [query, setQuery] = useState("");
  const [isEditing, setIsEditing] = useState(false);
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

  const updateTitle = (newTitle) => {
    dispatch({type: 'update-playlist', playlist: id, title: newTitle});
  }

  return (
    <MainPage>
      <div className="flex items-center space-x-8 mb-4">
        <h2>{title}</h2>
        <button
          className="rounded-full border px-3 py-1 border-purple-light bg-transparent max-sm:hidden"
          onClick={() => setIsEditing(!isEditing)}
        >
          EDIT PLAYLIST
        </button>
        {isEditing && <EditModal onClose={() => setIsEditing(false)} onSave={updateTitle} />}
      </div>
      <p>Search for songs to add to your playlist!</p>
      <div className="flex justify-between items-center mr-6 mt-2">
        <Form className="!flex !text-gray-500 min-w-[60%]">
          <MdSearch className="absolute text-xl m-2" />
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 !px-9 !rounded-full !bg-zinc-700 !border-none !text-white"
            aria-label="Search"
            onKeyUp={(e) => setQuery(e.target.value)}
          />
        </Form>
        <button
          className="rounded-full border px-3 py-1 border-purple-light bg-transparent max-sm:hidden"
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
      <MusicList songs={songs} page="playlist" />
    </MainPage>
  );
}
