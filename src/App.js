import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDataContext from "./context";
import { Signup, Login, Home, PlaylistPage } from "./pages";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const defaultUserData = {
  likedSongs: [],
  playlists: [
    {
      id: "dummy1",
      title: "Dummy Playlist",
      songs: [],
    },
    {
      id: "dummy2",
      title: "Dummy Playlist 2",
      songs: [],
    },
  ],
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
