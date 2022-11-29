import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  MdHomeFilled, MdLibraryMusic, MdFavorite, MdAirplay, 
  MdShuffle, MdLoop, MdPauseCircle, MdSkipNext, MdSkipPrevious
} from "react-icons/md";
import createPlaylist from "../assets/createPlaylist.svg";
import UserDataContext from "../context";
import Music from "../Music";

export function Sidebar() {
  const [{ playlists, queue, currentSong }, dispatch] = useContext(UserDataContext);
  if (queue.length && queue[currentSong]) {
    var song = Music.getSong(queue[currentSong]);
    var album = Music.getAlbum(song.album, {by: song.artist});
  }

  return (
    <>
      {/* Mobile */}
      <div className="
        sm:hidden absolute bottom-0 left-0 z-10
        w-full py-2 grid grid-cols-3 bg-zinc-700
        text-sm text-center text-gray
      ">
        <Link className="text-white no-underline" to="/">
          <MdHomeFilled className="m-auto text-lg" />
          <p className="m-0">Home</p>
        </Link>
        <Link className="text-white no-underline" to="/signup">
          <MdLibraryMusic className="m-auto text-lg" />
          <p className="m-0">Your Library</p>
        </Link>
        <Link className="text-white no-underline" to="/login">
          <MdFavorite className="m-auto text-lg" />
          <p className="m-0">Liked Songs</p>
        </Link>
      </div>
      {/* Desktop */}
      <div className="max-sm:hidden w-42 md:w-72 h-full relative">
        <div className="w-42 md:w-72 h-full bg-zinc-800 grid grid-rows-[min-content_1fr_min-content]">
          <div className="flex flex-col p-4 space-y-6">
            <div className="flex content-center">
              <img className="px-3" src="/logo.svg" alt="logo" />
              <h1 className="text-3xl">melo</h1>
            </div>
            <button
              onClick={() => dispatch('create-playlist')}
              className="w-full flex justify-evenly p-2 rounded bg-violet-700 hover:bg-violet-800"
            >
              <img src={createPlaylist} alt="Create Playlist" />
              Create Playlist
            </button>
          </div>
          <div className="
            flex flex-col p-4 pt-0 space-y-6 overflow-auto
            scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded
          ">
            <nav>
              <ul className="p-0 m-0">
                <Link className="text-white no-underline" to="/">
                  <div className="flex content-center space-x-3 py-2">
                    <MdHomeFilled className="my-auto" />
                    Home
                  </div>
                </Link>
                <Link className="text-white no-underline" to="/signup">
                  <div className="flex content-center space-x-3 py-2">
                    <MdLibraryMusic className="my-auto" />
                    Your Library
                  </div>
                </Link>
                <Link className="text-white no-underline" to="/login">
                  <div className="flex content-center space-x-3 py-2">
                    <MdFavorite className="my-auto" />
                    Liked Songs
                  </div>
                </Link>
              </ul>
            </nav>
            <div className="border-top"></div>
            {
              Object.entries(playlists).map(([id, { title }]) => (
                <div key={id}>
                  <Link className="text-white no-underline" to={`/list/${id}`}>
                    {title}
                  </Link>
                </div>
              ))
            }
          </div>
          {song && (
            <div className="w-full flex flex-col justify-end bg-zinc-900 rounded-t-lg">
              <div
                className="m-3 w-1/1 aspect-square flex flex-col !bg-cover rounded-md"
                style={{background: "url(" + require(`../assets/${album.photo}`) + ")"}}
              >
                <div className="flex-1" />
                <div className="flex justify-center text-xl">
                  <button onClick={() => {}}><MdShuffle /></button>
                  <button onClick={() => dispatch({type: 'play-song', index: currentSong - 1})}><MdSkipPrevious /></button>
                  <button onClick={() => dispatch({type: 'change-pause-status'})}><MdPauseCircle /></button>
                  <button onClick={() => dispatch({type: 'play-song', index: currentSong + 1})}><MdSkipNext /></button>
                  <button onClick={() => {}}><MdLoop /></button>
                </div>
              </div>
              <div className="flex px-3 mb-3">
                <div className="flex flex-col">
                  <p className="text-lg">{song.title}</p>
                  <p className="text-sm">{song.artist}</p>
                </div>
                <div className="flex">
                  <MdAirplay />
                  <MdFavorite />
                </div>
              </div>
              <p className="text-center text-black bg-purple-light">
                Now Playing on <b>MyMacbook</b>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
