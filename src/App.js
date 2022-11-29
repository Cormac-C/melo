import React, { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDataContext, { userDataReducer } from "./context";
import { Signup, Login, Home, PlaylistPage, Account, Profile } from "./pages";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [state, dispatch] = useReducer(
    userDataReducer,
    {
      // Song player
      queue: ["What's the Difference", "Mob Ties"],
      currentSong: 0,
      isPlaying: false,
      // User info
      likedSongs: [],
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
    }
  );

  return (
    <UserDataContext.Provider value={[state, dispatch]}>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/list/:id" element={<PlaylistPage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </UserDataContext.Provider>
  );
}

export default App;
