import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDataContext from "./context";
import { Signup, Login, Home, PlaylistPage } from "./pages";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const defaultUserData = {
  currentUser: "",
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
};

function App() {
  return (
    <UserDataContext.Provider value={defaultUserData}>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/list/:id" element={<PlaylistPage />} />
        </Routes>
      </Router>
    </UserDataContext.Provider>
  );
}

export default App;
