import { React } from "react";
import { MainPage } from "./Middleware";
import { Row } from "react-bootstrap";
import { HorizCard, VertCard } from "../components";

const playlists = [
  {
    title: "Car jamz everyone knows",
    subtitle: "By Andrea Nicastro",
    src: "playlistCover1.png",
  },
  {
    title: "Shower Tunes",
    subtitle: "My favourite songs to sing in the shower",
    src: "playlistCover2.png",
  },
  {
    title: "Car jamz everyone knows",
    subtitle: "By Andrea Nicastro",
    src: "playlistCover1.png",
  },
  {
    title: "Shower Tunes",
    subtitle: "My favourite songs to sing in the shower",
    src: "playlistCover2.png",
  },
  {
    title: "Car jamz everyone knows",
    subtitle: "By Andrea Nicastro",
    src: "playlistCover1.png",
  },
  {
    title: "Shower Tunes",
    subtitle: "My favourite songs to sing in the shower",
    src: "playlistCover2.png",
  },
];

const albums = [
  {
    artist: "The Weeknd",
    title: "After Hours",
    release: "2020",
    duration: "14 songs, 56 min 17 sec",
    src: "weekndAlbum.png",
  },
  {
    artist: "Doja Cat",
    title: "Planet Her (Deluxe)",
    release: "2021",
    duration: "19 songs, 59 min 28 sec",
    src: "dojaAlbum.png",
  },
  {
    artist: "The Weeknd",
    title: "After Hours",
    release: "2020",
    duration: "14 songs, 56 min 17 sec",
    src: "weekndAlbum.png",
  },
];

const songs = [
  {
    artist: "Justin Bieber, Don Toliver",
    title: "Honest (feat. Don Toliver)",
    release: "2022",
    duration: "3 min 13 sec",
    src: "bieberAlbum.png",
  },
  {
    artist: "Baby Keem",
    title: "HONEST",
    release: "2019",
    duration: "2 min 52 sec",
    src: "keemAlbum.png",
  },
  {
    artist: "Justin Bieber, Don Toliver",
    title: "Honest (feat. Don Toliver)",
    release: "2022",
    duration: "3 min 13 sec",
    src: "bieberAlbum.png",
  },
  {
    artist: "Baby Keem",
    title: "HONEST",
    release: "2019",
    duration: "2 min 52 sec",
    src: "keemAlbum.png",
  },
];

export function Home() {
  return (
    <MainPage>
      <h2 className="text-white my-4">Recently Played</h2>
      <Row className="mb-8">
        <div className="
          flex flex-row overflow-x-scroll space-x-4 p-2
          scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded
        ">
          {playlists.map((playlist, i) => {
            return (
              <VertCard
                key={i}
                title={playlist.title}
                subtitle={playlist.subtitle}
                imgSrc={require(`../assets/${playlist.src}`)}
              />
            );
          })}
        </div>
      </Row>
      <h2 className="text-white my-4">Recommended for you</h2>
      <Row className="mb-8">
        <div className="
          flex flex-row overflow-x-scroll space-x-4 p-2
          scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded
        ">
          {albums.map((album, i) => {
            return (
              <HorizCard
                type="Album"
                key={i}
                artist={album.artist}
                title={album.title}
                release={album.release}
                duration={album.duration}
                imgSrc={require(`../assets/${album.src}`)}
              />
            );
          })}
        </div>
      </Row>
      <h2 className="text-white my-4">Trending Now</h2>
      <Row className="mb-8">
        <div className="
          flex flex-row overflow-x-scroll space-x-4 p-2
          scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded
        ">
          {songs.map((song, i) => {
            return (
              <HorizCard
                type="Song"
                key={i}
                artist={song.artist}
                title={song.title}
                release={song.release}
                duration={song.duration}
                imgSrc={require(`../assets/${song.src}`)}
              />
            );
          })}
        </div>
      </Row>
    </MainPage>
  );
}
