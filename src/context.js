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

const playSong = (state, index) => {
  const newState = {...state};
  if (0 <= index && index < state.queue.length) {
    newState.currentSong = index;
    newState.isPlaying = true;
  } else {
    newState.isPlaying = false;
  }
  return newState;
}
const changePauseStatus = (state, status) => {
  const newState = {...state};
  newState.isPlaying = status ?? !newState.isPlaying;
  return newState;
}
const addToQueue = (state, songID) => {
  const newState = {...state};
  newState.queue.push(songID);
  return newState;
}

export const userDataReducer = (state, {type, ...payload}) => {
  switch (type) {
    case 'like-song':
      return likeSong(state, payload.song);
    case 'create-playlist':
      return createPlaylist(state, payload.playlist);
    case 'add-to-playlist':
      return addSong(state, payload.playlist, payload.song);
    // Song Player
    case 'play-song':
      return playSong(state, payload.index);
    case 'change-pause-status':
      return changePauseStatus(state, payload.status)
    case 'add-to-queue':
      return addToQueue(state, payload.song);
    default:
      throw new Error("Invalid reducer action: " + type);
  }
}

const UserDataContext = React.createContext();
UserDataContext.displayName = "User Data";

export default UserDataContext;
