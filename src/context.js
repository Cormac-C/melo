import React from "react";
import { v4 as uuid } from 'uuid';

/*
DATA STRUCTURE
{
  likedSongs: [<song-id>, ...],
  playlists: {
    <id>: {
      title: <title>,
      songs: [<song-id>, ...],
    }, ...
  },
}
 */

const likeSong = (state, songID) => {
  const newState = {...state};
  if (newState.likedSongs.includes(songID)) {
    const index = newState.likedSongs.findIndex(songID);
    newState.likedSongs.splice(index, index);
  } else {
    newState.likedSongs.push(songID);
  }
  return newState;
}

const createPlaylist = (state, newPlaylist) => {
  const newState = {...state};
  const playlistID = uuid();
  newState.playlists[playlistID] = newPlaylist ?? {
    title: "New Playlist",
    songs: [],
  };
  return newState;
}

const addSong = (state, playlistID, songID) => {
  const newState = {...state};
  if (!newState.playlists[playlistID].songs.includes(songID)) {
    newState.playlists[playlistID].songs.push(songID);
  }
  return newState;
}

export const userDataReducer = (state, {type, ...payload}) => {
  switch (type) {
    case 'like-song':
      return likeSong(state, payload.song);
    case 'create-playlist':
      return createPlaylist(state, payload.playlist);
    case 'add-song':
      return addSong(state, payload.playlist, payload.song);
    default:
      throw new Error("Invalid reducer action");
  }
}

const UserDataContext = React.createContext();
UserDataContext.displayName = "User Data";

export default UserDataContext;
