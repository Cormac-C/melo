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

export function SongOptionsMenu({ songID, onClose }) {
  const dispatch = useContext(UserDataContext)[1];
  const song = Music.getSong(songID);

  return (
    <div
      className="
        absolute bottom-0 left-0 z-30 w-full
        bg-zinc-900 flex flex-col text-white
        divide-slate-700 divide-y divide-solid p-4 pb-0
      "
      onClick={onClose}
    >
      <button className="flex items-center p-2" onClick={onClose}>
        <MdQueue className="mr-2" />
        Add to Queue
      </button>
      <button className="flex items-center p-2" onClick={onClose}>
        <MdDoDisturbOn className="mr-2" />
        Remove from Playlist
      </button>
      <Link className="flex text-white p-2 items-center no-underline" to={`/album/${song.album}`}>
        <MdOutlineAlbum className="mr-2" />
        Go to Album
      </Link>
      <button className="flex items-center p-2" onClick={() => dispatch({ type: "like-song", song: songID })}>
        <MdFavorite className="mr-2" />
        Save to Liked Songs
      </button>
      <Link className="flex text-white p-2 items-center no-underline" to={`/artist/${song.artist}`}>
        <MdKeyboardVoice className="mr-2" />
        Go to Artist
      </Link>
      <button className="p-3" onClick={onClose}>
        Close
      </button>
    </div>
  );
}

export function SongIcon({ songID, onClick }) {
  const { title, artist, album } = Music.getSong(songID);
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

export function Song({ songID, page, onClick }) {
  const [isOptions, showOptions] = useState(false);
  const { album } = Music.getSong(songID);

  return (
    <>
      <div className="flex items-center">
        <MdMoreVert
          onClick={() => showOptions(!isOptions)}
          className="sm:hidden text-2xl"
        />
        <SongIcon songID={songID} onClick={onClick} />
      </div>
      <p className="max-sm:hidden">{album}</p>
      {page === "playlist" ? (
        <p className="max-sm:hidden">Nov 10, 2022</p>
      ) : (
        <p className="max-sm:hidden">12300</p>
      )}
      <p className="max-sm:hidden">3:13</p>
      {page === "playlist" && (
        <MdMoreVert
          onClick={() => showOptions(!isOptions)}
          className="max-sm:hidden hover:cursor-pointer text-2xl"
        />
      )}
      {isOptions && <SongOptionsMenu songID={songID} onClose={() => showOptions(false)} />}
    </>
  );
}