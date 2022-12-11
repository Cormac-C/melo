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

export function SongOptions({ songID, onClose, className="" }) {
  const dispatch = useContext(UserDataContext)[1];
  const { album, artist } = Music.getSong(songID);

  return (
    <>
      {/* Desktop */}
      <div
        className={"max-sm:hidden absolute z-100 bg-white rounded p-2 text-blue-900 " + className}
        onClick={onClose}
      >
        <p className="w-max" onClick={() => dispatch({type: 'add-to-queue', song: songID})}>Add to queue</p>
        <Link className="no-underline text-blue-900" to={`/artist/${artist}`}>Go to artist</Link><br/>
        {/* <Link className="no-u nderline text-blue-900" to={`/album/${album}`}>Go to album</Link> */}
        <p className="w-max" onClick={() => dispatch({type: 'like-song', song: songID})}>Save to liked songs</p>
        {/* <p className="w-max" onClick={() => {}}>Add to playlist</p> */}
      </div>
      {/* Mobile */}
      <div className="sm:hidden fixed w-screen h-screen left-0 top-0 m-0 z-30" onClick={onClose}>
        <div className="
          absolute bottom-0 left-0 w-full
          bg-zinc-900 flex flex-col text-white
          divide-slate-700 divide-y divide-solid p-4 pb-0
        ">
          <button className="flex items-center p-2" onClick={onClose}>
            <MdQueue className="mr-2" />
            Add to Queue
          </button>
          <button className="flex items-center p-2" onClick={onClose}>
            <MdDoDisturbOn className="mr-2" />
            Remove from Playlist
          </button>
          <Link className="flex text-white p-2 items-center no-underline" to={`/album/${album}`}>
            <MdOutlineAlbum className="mr-2" />
            Go to Album
          </Link>
          <button className="flex items-center p-2" onClick={() => dispatch({ type: "like-song", song: songID })}>
            <MdFavorite className="mr-2" />
            Save to Liked Songs
          </button>
          <Link className="flex text-white p-2 items-center no-underline" to={`/artist/${artist}`}>
            <MdKeyboardVoice className="mr-2" />
            Go to Artist
          </Link>
          <button className="p-3" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </>
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
      <div className="max-sm:hidden relative hover:cursor-pointer">
        <MdMoreVert className="text-2xl" onClick={() => showOptions(!isOptions)} />
        {isOptions && (
          <SongOptions className="right-0" songID={songID} onClose={() => showOptions(false)} />
        )}
      </div>
    </>
  );
}