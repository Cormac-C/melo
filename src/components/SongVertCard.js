import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MdMoreVert } from "react-icons/md";

import UserDataContext from "../context";
import Music from "../Music";
import { VertCard } from "./VertCard";

export function SongVertCard({ songID, onClick }) {
  const dispatch = useContext(UserDataContext)[1];
  const [isShowingOptions, setIsShowingOptions] = useState(false);
  const song = Music.getSong(songID);
  const album = Music.getAlbum(song.album, {by: song.artist});

  const playMusic = () => {
    dispatch({ type: 'set-queue', songs: [songID] });
    dispatch({ type: 'play-song', index: 0 });
  }

  return (
    <div className="hover:cursor-pointer" onClick={onClick ? () => onClick(songID) : playMusic}>  
      <VertCard
        key={songID}
        title={song.title}
        subtitle={song.artist}
        imgSrc={require(`../assets/${album.photo}`)}
      >
        <div className="relative" onClick={(e) => e.stopPropagation()}>
          <MdMoreVert
            onClick={() => setIsShowingOptions(!isShowingOptions)}
            className="text-2xl"
          />
          {isShowingOptions && (
            <div
              className="absolute left-2 z-100 bg-white rounded p-2 text-blue-900"
              onClick={() => setIsShowingOptions(false)}
            >
              <p className="w-max" onClick={() => dispatch({type: 'add-to-queue', song: songID})}>Add to queue</p>
              <Link className="no-underline text-blue-900" to={`/artist/${song.artist}`}>Go to artist</Link><br/>
              {/* <Link className="no-u nderline text-blue-900" to={`/album/${song.album}`}>Go to album</Link> */}
              <p className="w-max" onClick={() => dispatch({type: 'like-song', song: songID})}>Save to liked songs</p>
              {/* <p className="w-max" onClick={() => {}}>Add to playlist</p> */}
            </div>
          )}
        </div>
      </VertCard>
    </div>
  );
}