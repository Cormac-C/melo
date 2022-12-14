import React, { useEffect, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDataContext, { userDataReducer } from "./context";
import {
  Signup,
  Login,
  Home,
  PlaylistPage,
  Account,
  Profile,
  LikedSongs,
  Following,
  Follower,
  ArtistPage,
} from "./pages";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [state, dispatch] = useReducer(userDataReducer, {
    // Song player
    queue: [],
    currentSong: 0,
    player: new Audio(),
    // User info
    likedSongs: [],
    followedArtists: [],
    playlists: {
      0: {
        title: "Dummy Playlist",
        songs: ["What's the Difference", "Mob Ties"],
      },
      1: {
        title: "Dummy Playlist 2",
        songs: ["G.O.M.D."],
      },
    },
  });

  // Makes player go through the queue (i.e. play next song when one ends)
  useEffect(() => {
    state.player.addEventListener("ended", () => 
      dispatch({type: 'play-song', index: state.currentSong + 1})
    );
  });
  

  return (
    <UserDataContext.Provider value={[state, dispatch]}>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/list/:id" element={<PlaylistPage />} />
          <Route path="/liked-songs" element={<LikedSongs />} />
          <Route path="/account" element={<Account />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/following" element={<Following />} />
          <Route path="/followers" element={<Follower />} />
          <Route path="/artist/:id" element={<ArtistPage />} />
        </Routes>
      </Router>
    </UserDataContext.Provider>
  );
}

export default App;
