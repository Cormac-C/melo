import React, { useContext } from "react";
import { MainPage } from "./Middleware";
import UserDataContext from "../context";
import { MusicList } from "../components/MusicList";

export function LikedSongs() {
  const [{ likedSongs }] = useContext(UserDataContext);

  return (
    <MainPage>
      <h2>{likedSongs.length ? "Liked Songs" : "No liked songs yet :)"}</h2>
      <MusicList songs={likedSongs} page="playlist" />
    </MainPage>
  );
}
