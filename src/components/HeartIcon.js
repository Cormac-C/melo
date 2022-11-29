import React, { useContext } from "react";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import UserDataContext from "../context";

export function HeartIcon({ song, ...props }) {
  const [{ likedSongs }, dispatch] = useContext(UserDataContext);
  const isLiked = likedSongs.includes(song);

  return (
    <button {...props} onClick={() => dispatch({type: 'like-song', song })}>
      { isLiked ? <MdFavorite /> : <MdOutlineFavoriteBorder /> }
    </button>
  );
}
