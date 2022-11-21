import { React } from "react";
import { Link } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { MdLibraryMusic } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import createPlaylist from '../assets/createPlaylist.svg';

export function Sidebar() {
  return (
    <div style={{ width: "20%" }}>
      <div className="sidebar">
        <div style={{ display: "flex", alignContent: "center"}}>
          <img src="/logo.svg" alt="logo" />
          <h1>melo</h1>
        </div>
        <button className="create-playlist">
          <img src={createPlaylist} alt="Create Playlist" />
          Create Playlist
        </button>
        <nav>
          <ul>
            <Link to="/"><MdHomeFilled/>Home</Link>
            <Link to="/signup"><MdLibraryMusic/>Your Library</Link>
            <Link to="/login"><MdFavorite/>Liked Songs</Link>
          </ul>
        </nav>
        <div style={{borderTop: "1px solid grey", margin: "1rem 0"}}></div>
      </div>
    </div>
  );
}
