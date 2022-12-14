import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { MainPage } from "./Middleware";
import { Row, Image, Button, ToggleButton } from "react-bootstrap";
import UserDataContext from "../context";
import Music from "../Music";
import { MusicList, VertCard } from "../components";

const artists = Music.getArtists();

const concerts = [
  {
    city: "London",
    date: "12/12",
    venue: "Wembley Stadium",
    src: "london.jpg",
  },
  {
    city: "Paris",
    date: "12/22",
    venue: "Stade de France",
    src: "paris.jpeg",
  },
  {
    city: "Madrid",
    date: "12/30",
    venue: "Santiago Bernabeu",
    src: "madrid.jpg",
  },
];

export function ArtistPage() {
  const [{ followedArtists }, dispatch] = useContext(UserDataContext);
  let { id } = useParams();
  const artist = artists[id];

  const songs = Music.getSongs({ by: id });
  const [showConcerts, setShowConcerts] = useState(false);
  const [showLocal, setShowLocal] = useState(false);
  const [followed, setFollowed] = useState(followedArtists.includes(id));

  return (
    <MainPage>
      <Row>
        <Image
          src={require(`../assets/${artist.photo}`)}
          className="!w-1/2 md:!w-64 p-4 md:!h-64 object-cover"
        />
        <div className="!w-1/2 my-auto">
          <h1 className="text-white my-4">{id}</h1>
          <p className="text-gray-300 mb-4">67 bajillion monthly listeners</p>
        </div>
        <div className="flex justify-around lg:!w-1/2">
          <Button
            className={
              followed
                ? "!rounded-full  text-white !font-semibold mr-8 !border-purple-light !bg-purple-light"
                : "!rounded-full !bg-slate-800 text-white !font-semibold mr-8 !border-purple-light"
            }
            onClick={() => {
              setFollowed(!followed);
              dispatch({ type: "follow-artist", artist: id });
            }}
          >
            {followed ? "Following" : "Follow"}
          </Button>
          <Button
            className={
              showConcerts
                ? "!rounded-full  text-white !font-semibold mr-8 !border-purple-light !bg-purple-light"
                : "!rounded-full !bg-slate-800 text-white !font-semibold mr-8 !border-purple-light"
            }
            onClick={() => setShowConcerts(!showConcerts)}
          >
            Upcoming Concerts
          </Button>
        </div>
      </Row>
      {showConcerts && (
        <div>
          <h2 className="text-white my-4">Upcoming Concerts</h2>
          <ToggleButton
            className={
              showLocal
                ? "!rounded-full  text-white !font-semibold mr-8 !border-purple-light !bg-purple-light"
                : "!rounded-full !bg-slate-800 text-white !font-semibold mr-8 !border-purple-light"
            }
            onClick={() => setShowLocal(!showLocal)}
          >
            {showLocal ? "Showing Nearby" : "Show Nearby"}
          </ToggleButton>
          <Row className="w-full mb-8">
            <div className="flex flex-row overflow-x-scroll space-x-4">
              {concerts.map((concert) => {
                if (showLocal && concert.city !== "Madrid") return null;
                return (
                  <VertCard
                    title={concert.city + "-" + concert.date}
                    subtitle={concert.venue}
                    imgSrc={require(`../assets/${concert.src}`)}
                    key={concert.city}
                  />
                );
              })}
            </div>
          </Row>
        </div>
      )}
      <h2 className="text-white my-4">Top Songs</h2>
      <Row className="w-full mb-8">
        <MusicList songs={Object.keys(songs)}></MusicList>
      </Row>
      <h2 className="text-white my-4">Albums</h2>
      <Row className="w-full mb-8">
        <div className="flex flex-row overflow-x-scroll space-x-4">
          {artist &&
            artist.albums &&
            Object.keys(artist.albums).map((album) => {
              return (
                <VertCard
                  title={album}
                  subtitle={id}
                  imgSrc={require(`../assets/${artist.albums[album].photo}`)}
                  key={album}
                />
              );
            })}
        </div>
      </Row>
    </MainPage>
  );
}
