import React, { useContext, useState } from "react";
import { MdMoreVert } from "react-icons/md";

import UserDataContext from "../context";
import Music from "../Music";
import { VertCard, SongOptions } from "../components";

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
            <SongOptions className="left-2" songID={songID} onClose={() => setIsShowingOptions(false)} />
          )}
        </div>
      </VertCard>
    </div>
  );
}