import React, { useContext } from "react";
import { MainPage } from "./Middleware";
import UserDataContext from "../context";
import { MusicList } from "../components/MusicList";

export function LikedSongs() {
  const [{ likedSongs }] = useContext(UserDataContext);

  return (
    <MainPage>
      {likedSongs.length
        ? <MusicList title={"Liked Songs"} songs={likedSongs} />
        : <h2 className="mt-20 flex justify-center">No liked songs yet :)</h2>}
    </MainPage>
  );
}
