import React, { useContext } from "react";
import {
  MdAirplay,
  MdPlayCircle,
  MdShuffle,
  MdLoop,
  MdPauseCircle,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";
import { HeartIcon } from "./HeartIcon";
import UserDataContext from "../context";
import Music from "../Music";
import { Link } from "react-router-dom";

export function Player({ className }) {
  const [{ player, queue, currentSong }, dispatch] = useContext(UserDataContext);
  if (queue.length && queue[currentSong]) {
    var songID = queue[currentSong];
    var song = Music.getSong(songID);
    var album = Music.getAlbum(song.album, { by: song.artist });
  }

  if (!song) return <></>;

  return (
    <>
      {/* Mobile */}
      <div className="sm:hidden w-full bg-zinc-900 flex content-center p-1">
        <img
          className="w-14 pr-2"
          src={require(`../assets/${album.photo}`)}
          alt="album cover"
        />
        <div className="flex flex-col flex-1">
          <p className="text-lg">{song.title}</p>
          <p className="text-sm">{song.artist}</p>
        </div>
        <button onClick={() => dispatch({ type: "change-pause-status" })}>
          {player.paused ? (
            <MdPlayCircle className="text-4xl" />
            ) : (
            <MdPauseCircle className="text-4xl" />
          )}
        </button>
      </div>
      {/* Desktop */}
      <div
        className={
          "max-sm:hidden w-full flex flex-col justify-end bg-zinc-900 rounded-t-lg " +
          className
        }
      >
        <div
          className="m-3 w-1/1 aspect-square flex flex-col !bg-cover rounded-md transition-all"
          style={{
            background: "url(" + require(`../assets/${album.photo}`) + ")",
          }}
        >
          <div className="flex-1" />
          <div className="flex justify-evenly text-5xl pb-2">
            <button onClick={() => {}}>
              <MdShuffle className="text-2xl" />
            </button>
            <button
              onClick={() =>
                dispatch({ type: "play-song", index: currentSong - 1 })
              }
            >
              <MdSkipPrevious className="bg-white rounded-full border-4 border-gray-500 opacity-80 text-black p-1 text-4xl" />
            </button>
            <button onClick={() => dispatch({ type: "change-pause-status" })}>
              {player.paused ? (
                <MdPlayCircle className="bg-purple-default rounded-full" />
                ) : (
                <MdPauseCircle className="bg-purple-default rounded-full" />
              )}
            </button>
            <button
              onClick={() =>
                dispatch({ type: "play-song", index: currentSong + 1 })
              }
            >
              <MdSkipNext className="bg-white rounded-full border-4 border-gray-500 opacity-80 text-black p-1 text-4xl" />
            </button>
            <button onClick={() => {}}>
              <MdLoop className="text-2xl" />
            </button>
          </div>
        </div>
        <div className="flex px-3 mb-3 space-x-4">
          <div className="flex flex-col flex-1">
            <p className="text-lg">{song.title}</p>
            <Link
              className="text-sm text-white no-underline"
              to={`/artist/${song.artist}`}
            >
              {song.artist}
            </Link>
          </div>
          <MdAirplay className="text-2xl my-auto" />
          <HeartIcon className="text-2xl" song={songID} />
        </div>
        <p className="text-center text-black bg-purple-light">
          Now Playing on <b>MyMacbook</b>
        </p>
      </div>
    </>
  );
}
