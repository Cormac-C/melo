import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  MdMoreVert,
  MdQueue,
  MdDoDisturbOn,
  MdOutlineAlbum,
  MdFavorite,
  MdKeyboardVoice,
} from "react-icons/md";
import Music from "../Music";
import UserDataContext from "../context";

const possibleSongs = Music.getSongs();

function Song({ songID, showOptions, page }) {
  const song = possibleSongs[songID];

  return (
    <>
      {/* Mobile */}
      <div className="sm:hidden flex mt-3 mr-3">
        <img
          className="w-12 pr-2"
          src={require("../assets/bieberAlbum.png")}
        ></img>
        <div className="flex flex-column flex-1">
          <p className="m-0">{song.title}</p>
          <p className="m-0 text-sm text-zinc-400">{song.artist}</p>
        </div>
        {showOptions && (
          <MdMoreVert
            onClick={() => showOptions(songID)}
            className="text-2xl"
          />
        )}
      </div>
      {/* Desktop */}
      <>
        <div className="max-sm:hidden flex pb-4">
          <img
            className="w-16 pr-1"
            src={require("../assets/bieberAlbum.png")}
          ></img>
          <div className="flex flex-column">
            <p className="m-0">{song.title}</p>
            <Link
              className="text-sm text-zinc-400 decoration-zinc-400"
              to={`/artist/${song.artist}`}
            >
              {song.artist}
            </Link>
          </div>
        </div>
        <p className="max-sm:hidden">{song.album}</p>
        {page === "playlist" ? (
          <p className="max-sm:hidden">Nov 10, 2022</p>
        ) : (
          <p className="max-sm:hidden">12300</p>
        )}
        <p className="max-sm:hidden">3:13</p>
      </>
    </>
  );
}

function SongOptionsMenu({ shownSong, closeMenu }) {
  const [_, dispatch] = useContext(UserDataContext);
  const song = possibleSongs[shownSong];

  const likeShownSong = () => {
    dispatch({ type: "like-song", song: shownSong });
    closeMenu();
  };

  return (
    <div
      className="
      absolute bottom-0 left-0 z-30 w-full
      bg-zinc-900 flex flex-col
      divide-slate-700 divide-y divide-solid p-4 pb-0
    "
    >
      <button className="flex items-center p-2" onClick={closeMenu}>
        <MdQueue className="mr-2" />
        Add to Queue
      </button>
      <button className="flex items-center p-2" onClick={closeMenu}>
        <MdDoDisturbOn className="mr-2" />
        Remove from Playlist
      </button>
      <button className="flex items-center p-2" onClick={closeMenu}>
        <MdOutlineAlbum className="mr-2" />
        Go to Album
      </button>
      <button className="flex items-center p-2" onClick={likeShownSong}>
        <MdFavorite className="mr-2" />
        Save to Liked Songs
      </button>
      <button className="flex items-center p-2" onClick={closeMenu}>
        <MdKeyboardVoice className="mr-2" />
        Go to Artist
      </button>
      <button className="p-3" onClick={closeMenu}>
        Close
      </button>
    </div>
  );
}

export function MusicList(
  { title, songs, children, page } = { title: "", songs: [] }
) {
  const [shownSong, setShownSong] = useState(null);

  const shownSongOptions = (songID) => {
    shownSong === songID ? setShownSong(null) : setShownSong(songID);
  };

  return (
    <div className="text-white text-left">
      {title && <h2>{title}</h2>}
      {children}
      {/* Mobile */}
      <div className="sm:hidden">
        {songs.map((songID) => (
          <Song songID={songID} showOptions={shownSongOptions} page={page} />
        ))}
        {shownSong && (
          <SongOptionsMenu
            shownSong={shownSong}
            closeMenu={() => setShownSong(null)}
          />
        )}
      </div>
      {/* Desktop */}
      <div className="max-sm:hidden grid grid-cols-[repeat(3,1fr)_min-content] p-6">
        <p className="text-zinc-500">Song title</p>
        <p className="text-zinc-500">Album</p>
        {page === "playlist" ? (
          <p className="text-zinc-500">Date added</p>
        ) : (
          <p className="text-zinc-500">No of Listeners</p>
        )}
        <p className="text-zinc-500">Duration</p>
        {songs.map((songID) => (
          <Song key={songID} songID={songID} page={page} />
        ))}
      </div>
    </div>
  );
}
