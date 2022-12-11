import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdHomeFilled, MdLibraryMusic, MdFavorite } from "react-icons/md";
import createPlaylist from "../assets/createPlaylist.svg";
import UserDataContext from "../context";
import { Player, PlaylistEditModal } from "./";

export function Sidebar() {
  const [{ playlists }, dispatch] = useContext(UserDataContext);
  const [makingNewList, setOpenNewList] = useState(false);
  const navigate = useNavigate();

  const makePlaylist = (title) => {
    dispatch({type: 'create-playlist', playlist: { title, songs: [] }});
    navigate("/list/-1");
  }

  return (
    <>
      {/* Mobile */}
      <div className="sm:hidden absolute bottom-0 left-0 z-10 w-full">
        <Player />
        <div className="grid grid-cols-3 bg-zinc-700 py-2 text-sm text-center text-gray">
          <Link className="text-white no-underline" to="/">
            <MdHomeFilled className="m-auto text-lg" />
            <p className="m-0">Home</p>
          </Link>
          <Link className="text-white no-underline" to="/profile">
            <MdLibraryMusic className="m-auto text-lg" />
            <p className="m-0">Your Library</p>
          </Link>
          <Link className="text-white no-underline" to="/liked-songs">
            <MdFavorite className="m-auto text-lg" />
            <p className="m-0">Liked Songs</p>
          </Link>
        </div>
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
              onClick={() => setOpenNewList(true)}
              className="w-full flex justify-evenly p-2 rounded bg-violet-700 hover:bg-violet-800"
            >
              <img src={createPlaylist} alt="Create Playlist" />
              Create Playlist
            </button>
            {makingNewList && (
              <PlaylistEditModal
                heading="Create New Playlist"
                onClose={() => setOpenNewList(false)}
                onSave={makePlaylist}
              />
            )}
          </div>
          <div
            className="
            flex flex-col p-4 pt-0 space-y-6 overflow-auto
            scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded
          "
          >
            <nav>
              <ul className="p-0 m-0">
                <Link className="text-white no-underline" to="/">
                  <div className="flex content-center space-x-3 py-2">
                    <MdHomeFilled className="my-auto" />
                    Home
                  </div>
                </Link>
                <Link className="text-white no-underline" to="/profile">
                  <div className="flex content-center space-x-3 py-2">
                    <MdLibraryMusic className="my-auto" />
                    Your Library
                  </div>
                </Link>
                <Link className="text-white no-underline" to="/liked-songs">
                  <div className="flex content-center space-x-3 py-2">
                    <MdFavorite className="my-auto" />
                    Liked Songs
                  </div>
                </Link>
              </ul>
            </nav>
            <div className="border-top"></div>
            {Object.entries(playlists).map(([id, { title }]) => (
              <div key={id}>
                <Link className="text-white no-underline" to={`/list/${id}`}>
                  {title}
                </Link>
              </div>
            ))}
          </div>
          <Player />
        </div>
      </div>
    </>
  );
}
