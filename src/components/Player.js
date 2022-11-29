import React, { useContext } from "react";
import {
  MdFavorite, MdAirplay, MdPlayCircle, MdShuffle,
  MdLoop, MdPauseCircle, MdSkipNext, MdSkipPrevious
} from "react-icons/md";
import UserDataContext from "../context";
import Music from "../Music";

export function Player({className}) {
  const [{ queue, currentSong, isPlaying }, dispatch] = useContext(UserDataContext);
  if (queue.length && queue[currentSong]) {
    var song = Music.getSong(queue[currentSong]);
    var album = Music.getAlbum(song.album, {by: song.artist});
  }

  if (!song) return <></>;

  return (
    <div className={"w-full flex flex-col justify-end bg-zinc-900 rounded-t-lg " + className}>
      <div
        className="m-3 w-1/1 aspect-square flex flex-col !bg-cover rounded-md"
        style={{background: "url(" + require(`../assets/${album.photo}`) + ")"}}
      >
        <div className="flex-1" />
        <div className="flex justify-evenly text-5xl pb-2">
          <button onClick={() => {}}>
            <MdShuffle className="text-2xl" />
          </button>
          <button onClick={() => dispatch({type: 'play-song', index: currentSong - 1})}>
            <MdSkipPrevious className="bg-white rounded-full border-4 border-gray-500 opacity-80 text-black p-1 text-4xl" />
          </button>
          <button onClick={() => dispatch({type: 'change-pause-status'})}>
            {isPlaying
              ? <MdPauseCircle className="bg-purple-default rounded-full" />
              : <MdPlayCircle className="bg-purple-default rounded-full" />
            }
          </button>
          <button onClick={() => dispatch({type: 'play-song', index: currentSong + 1})}>
            <MdSkipNext className="bg-white rounded-full border-4 border-gray-500 opacity-80 text-black p-1 text-4xl" />
          </button>
          <button onClick={() => {}}>
            <MdLoop className="text-2xl" />
          </button>
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
  );
}
