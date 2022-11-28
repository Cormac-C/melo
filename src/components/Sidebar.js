import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { MdLibraryMusic } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import createPlaylist from "../assets/createPlaylist.svg";
import UserDataContext from "../context";
import Music from "../Music";

export function Sidebar() {
  const [{ playlists, currentSong }, dispatch] = useContext(UserDataContext);
  if (currentSong) {
    var song = Music.getSong(currentSong);
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
        <div className="w-42 md:w-72 h-full grid grid-rows-[1fr_min-content]">
          <div className="flex flex-col p-4 bg-zinc-800 space-y-6">
            <div className="flex content-center">
              <img className="px-3" src="/logo.svg" alt="logo" />
              <h1 className="text-3xl">melo</h1>
            </div>
            <div className="overflow-auto space-y-6">
              <button
                onClick={() => dispatch('create-playlist')}
                className="w-full flex justify-evenly p-2 rounded bg-violet-700 hover:bg-violet-800"
              >
                <img src={createPlaylist} alt="Create Playlist" />
                Create Playlist
              </button>
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
          </div>
          {currentSong && (
            <div className="w-full flex flex-col justify-end bg-zinc-900 rounded-t-lg">
              {/* <img className="p-3" src={require(`../assets/${album.photo}`)} /> */}
              <div className="flex flex-col px-3 mb-3">
                <p className="text-lg">{song.title}</p>
                <p className="text-sm">{song.artist}</p>
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
