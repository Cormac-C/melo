import { React, useState, useEffect } from "react";
import { MainPage } from "./Middleware";
import { Row, Image, Button } from "react-bootstrap";
import { HorizCard, VertCard } from "../components";
import sampleUser from "../assets/sampleUser.png";

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

export function Profile() {
  const [user, setUser] = useState();

  useEffect(() => {
    try {
      if (localStorage.getItem("currentUser")) {
        const memoryUser = JSON.parse(localStorage.getItem("currentUser"));
        setUser(memoryUser);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <MainPage>
      <Row>
        <Image
          src={sampleUser}
          className="!w-1/4 p-4 h-auto"
          roundedCircle={true}
        />
        <div className="!w-1/2 my-auto">
          <h1 className="text-white my-4">
            {user && user.name} {user && user.surname}
          </h1>
          <p className="text-gray-300">5 Playlists</p>

          <Button className="!rounded-full !bg-slate-800 !border-purple-light !font-semibold mr-8">
            20 Followers
          </Button>
          <Button className="!rounded-full !bg-slate-800 !border-purple-light !font-semibold mr-8">
            3 Following
          </Button>
        </div>
      </Row>
      <h2 className="text-white my-4">Your Most Played Songs</h2>
      <Row className="w-full mb-8">
        <div className="flex flex-row overflow-x-scroll space-x-4">
          {playlists.map((playlist) => {
            return (
              <VertCard
                title={playlist.title}
                subtitle={playlist.subtitle}
                imgSrc={require(`../assets/${playlist.src}`)}
              />
            );
          })}
        </div>
      </Row>
      <h2 className="text-white my-4">Your Most Played Artists</h2>
      <Row className="w-full mb-8">
        <div className="flex flex-row overflow-x-scroll space-x-4">
          {playlists.map((playlist) => {
            return (
              <VertCard
                title={playlist.title}
                subtitle={playlist.subtitle}
                imgSrc={require(`../assets/${playlist.src}`)}
              />
            );
          })}
        </div>
      </Row>
    </MainPage>
  );
}