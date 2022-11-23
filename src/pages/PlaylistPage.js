import React from "react";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { MainPage } from "./Middleware";
import Music from "../Music";
import UserDataContext from "../context";

const possibleSongs = Music.getSongs();

export function PlaylistPage() {
  let { id } = useParams();

  return (
    <MainPage>
      <UserDataContext.Consumer>
        {({playlists}) => {
          const { title, songs } = playlists[id];
          return (
            <div className="text-white text-left">
              <h2>{ title }</h2>
              <p>Search for songs to add to your playlist!</p>
              <Form className="d-flex !text-gray-500">
                <MdSearch className="absolute text-xl m-2" />
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="w-2/3 me-2 !px-9 !rounded-full !bg-zinc-800 !border-none !text-white"
                  aria-label="Search"
                />
              </Form>
              <div className="grid grid-cols-4 gap-x-4 pt-6">
                <p className="text-zinc-500">Song title</p>
                <p className="text-zinc-500">Album</p>
                <p className="text-zinc-500">Date added</p>
                <p className="text-zinc-500">Duration</p>
                {songs.map(songID => (
                  <React.Fragment key={songID}>
                    <p>{ possibleSongs[songID].title }</p>
                    <p>{ possibleSongs[songID].album }</p>
                    <p>Nov 10, 2022</p>
                    <p>3:13</p>
                  </React.Fragment>
                ))}
              </div>

            </div>
          );
        }}
      </UserDataContext.Consumer>
    </MainPage>
  );
}
