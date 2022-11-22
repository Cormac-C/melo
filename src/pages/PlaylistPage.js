import React from "react";
import { useParams } from "react-router-dom";
import { MainPage } from "./Middleware";
import Songs from "../Songs";
import UserDataContext from "../context";

export function PlaylistPage() {
  let { id } = useParams();

  return (
    <MainPage>
      <UserDataContext.Consumer>
        {({playlists}) => {
          const { title, songs: listSongs } = playlists[id];
          return (
            <span>
              <h2>{ title }</h2>
              {listSongs.map(songID => (
                <p key={songID} className="text-white">{ Songs.by('id')[songID] }</p>
              ))}
            </span>
          );
        }}
      </UserDataContext.Consumer>
    </MainPage>
  );
}
