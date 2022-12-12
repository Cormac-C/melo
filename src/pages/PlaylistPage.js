import React, { useContext, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { MainPage } from "./Middleware";
import Music from "../Music";
import UserDataContext from "../context";
import { SongIcon, MusicList, PlaylistEditModal } from "../components";

const possibleSongs = Music.getSongs();

const selectRandSong = () => {
  const songs = Object.keys(possibleSongs);
  const index = Math.floor(Math.random() * songs.length);
  return songs[index];
};

export function PlaylistPage() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [{ playlists }, dispatch] = useContext(UserDataContext);
  const [query, setQuery] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (id === "-1") {
      const ids = Object.keys(playlists);
      const latestID = ids[ids.length - 1];
      navigate(`/list/${latestID}`);
    }
  });

  if (!Object.keys(playlists).includes(id)) {
    return <MainPage>
      <h2>This playlist does not exist :(</h2>
    </MainPage>;
  }

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

  const deletePlaylist = () => {
    dispatch({type: 'delete-playlist', playlist: id});
    navigate("/");
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
        {isEditing && (
          <PlaylistEditModal onClose={() => setIsEditing(false)} onSave={updateTitle}>
            <div className="flex justify-center">
            <button
              className="rounded-fullborder px-3 py-1 border-purple-light bg-transparent"
              onClick={deletePlaylist}
            >
              DELETE PLAYLIST
            </button>
            </div>
          </PlaylistEditModal>
        )}
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
      <MusicList songs={songs} playlist={id} />
    </MainPage>
  );
}
