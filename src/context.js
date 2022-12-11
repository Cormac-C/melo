import React from "react";
import { v4 as uuid } from "uuid";
import Music from "./Music";

/*
DATA STRUCTURE
{
  likedSongs: [<song-id>, ...],
  followedArtists: [<artist-id>, ...],
  playlists: {
    <id>: {
      title: <title>,
      songs: [<song-id>, ...],
    }, ...
  },
}
 */

const getSong = (state) => {
  const song = state.queue[state.currentSong];
  const { file } = Music.getSong(song);
  if (file) {
    return require(`./assets/songs/${file}`);
  }
}

const followArtist = (state, artistID) => {
  const newState = { ...state };
  if (newState.followedArtists.includes(artistID)) {
    const index = newState.followedArtists.indexOf(artistID);
    newState.followedArtists.splice(index, 1);
  } else {
    newState.followedArtists.push(artistID);
  }
  return newState;
};

const likeSong = (state, songID) => {
  const newState = { ...state };
  if (newState.likedSongs.includes(songID)) {
    const index = newState.likedSongs.findIndex((song) => song === songID);
    newState.likedSongs.splice(index, 1);
  } else {
    newState.likedSongs.push(songID);
  }
  return newState;
};

const createPlaylist = (state, newPlaylist) => {
  const newState = { ...state };
  const playlistID = uuid();
  newState.playlists[playlistID] = newPlaylist ?? {
    title: "New Playlist",
    songs: [],
  };
  return newState;
};
const addSong = (state, playlistID, songID) => {
  const newState = { ...state };
  if (!newState.playlists[playlistID].songs.includes(songID)) {
    newState.playlists[playlistID].songs.push(songID);
  }
  return newState;
};
const updatePlaylist = (state, playlistID, title) => {
  const newState = { ...state };
  newState.playlists[playlistID].title = title;
  return newState;
}
const deletePlaylist = (state, playlistID) => {
  const newState = { ...state };
  delete newState.playlists[playlistID];
  return newState;
}

const playSong = (state, index) => {
  const newState = { ...state };
  if (0 <= index && index < state.queue.length) {
    newState.currentSong = index;
    newState.player.src = getSong(newState);
    newState.player.play();
  } else {
    newState.player.pause();
  }
  return newState;
};
const setQueue = (state, songs) => {
  const newState = { ...state };
  newState.queue = [...songs];
  newState.currentSong = 0;
  newState.player.src = getSong(newState);
  newState.player.pause();
  return newState;
}
const changePauseStatus = (state, status) => {
  const newState = { ...state };
  const newStatus = status ?? newState.player.paused;
  newStatus ? newState.player.play() : newState.player.pause();
  return newState;
};
const addToQueue = (state, songID) => {
  const newState = { ...state };
  newState.queue.push(songID);
  console.log(state);
  return newState;
};

export const userDataReducer = (state, { type, ...payload }) => {
  switch (type) {
    case "like-song":
      return likeSong(state, payload.song);
    case "create-playlist":
      return createPlaylist(state, payload.playlist);
    case "add-to-playlist":
      return addSong(state, payload.playlist, payload.song);
    case "update-playlist":
      return updatePlaylist(state, payload.playlist, payload.title);
    case "delete-playlist":
      return deletePlaylist(state, payload.playlist);
    case "follow-artist":
      return followArtist(state, payload.artist);
    // Song Player
    case "play-song":
      return playSong(state, payload.index);
    case "change-pause-status":
      return changePauseStatus(state, payload.status);
    case "set-queue":
      return setQueue(state, payload.songs);
    case "add-to-queue":
      return addToQueue(state, payload.song);
    default:
      throw new Error("Invalid reducer action: " + type);
  }
};

const UserDataContext = React.createContext();
UserDataContext.displayName = "User Data";

export default UserDataContext;
