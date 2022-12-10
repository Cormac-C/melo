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

export function SongIcon({ songID, onClick }) {
  const { title, artist, album } = possibleSongs[songID];
  const { photo } = Music.getAlbum(album, { by: artist });

  return (
    <div
      className={`flex ${onClick ? 'hover:cursor-pointer':''}`}
      onClick={onClick}
    >
      <img
        alt="album cover"
        className="w-16 pr-1 max-sm:w-12 max-sm:pr-2"
        src={require(`../assets/${photo}`)}
      />
      <div className="flex flex-column">
        <p className="m-0">{title}</p>
        <p className="sm:hidden m-0 text-sm text-zinc-400">{artist}</p>
        <Link
          className="max-sm:hidden text-sm text-zinc-400 decoration-zinc-400"
          to={`/artist/${artist}`}
        >
          {artist}
        </Link>
      </div>
    </div>
  );
}

function Song({ songID, page, showOptions, onClick }) {
  const { album } = possibleSongs[songID];

  return (
    <>
      <div className="flex items-center">
        {showOptions && (
          <MdMoreVert
            onClick={() => showOptions(songID)}
            className="sm:hidden text-2xl"
          />
        )}
        <SongIcon songID={songID} onClick={onClick} />
      </div>
      <p className="max-sm:hidden">{album}</p>
      {page === "playlist" ? (
        <p className="max-sm:hidden">Nov 10, 2022</p>
      ) : (
        <p className="max-sm:hidden">12300</p>
      )}
      <p className="max-sm:hidden">3:13</p>
    </>
  );
}

function SongOptionsMenu({ shownSong, closeMenu }) {
  const dispatch = useContext(UserDataContext)[1];

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
  const dispatch = useContext(UserDataContext)[1];

  const shownSongOptions = (songID) => {
    shownSong === songID ? setShownSong(null) : setShownSong(songID);
  };

  const playMusic = (index) => {
    dispatch({ type: 'set-queue', songs });
    dispatch({ type: 'play-song', index });
  }

  return (
    <div className="text-white text-left">
      {title && <h2>{title}</h2>}
      {children}
      {/* Mobile */}
      <div className="sm:hidden">
        {songs.map((songID, i) => (
          <Song
            key={songID}
            songID={songID}
            showOptions={shownSongOptions}
            page={page}
            onClick={() => playMusic(i)}
          />
        ))}
        {shownSong && (
          <SongOptionsMenu
            shownSong={shownSong}
            closeMenu={() => setShownSong(null)}
          />
        )}
      </div>
      {/* Desktop */}
      <div className="max-sm:hidden grid grid-cols-[repeat(3,1fr)_min-content] gap-y-4 p-6 pl-0">
        <p className="text-zinc-500">Song title</p>
        <p className="text-zinc-500">Album</p>
        {page === "playlist" ? (
          <p className="text-zinc-500">Date added</p>
        ) : (
          <p className="text-zinc-500">No of Listeners</p>
        )}
        <p className="text-zinc-500">Duration</p>
        {songs.map((songID, i) => (
          <Song
            key={songID}
            songID={songID}
            page={page}
            onClick={() => playMusic(i)}
          />
        ))}
      </div>
    </div>
  );
}
