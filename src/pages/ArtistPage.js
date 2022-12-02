import React from "react";
import { useParams } from "react-router-dom";
import { MainPage } from "./Middleware";
import { Row, Image, Button } from "react-bootstrap";
import { VertCard } from "../components";

import Music from "../Music";
import { MusicList } from "../components/MusicList";

const artists = Music.getArtists();

export function ArtistPage() {
  let { id } = useParams();
  const artist = artists[id];

  const songs = Music.getSongs({ by: id });
  console.log(songs, "songs");

  return (
    <MainPage>
      <Row>
        <Image
          src={require(`../assets/${artist.photo}`)}
          className="!w-64 p-4 !h-64"
        />
        <div className="!w-1/2 my-auto">
          <h1 className="text-white my-4">{id}</h1>
          <p className="text-gray-300 mb-4">67 bajillion monthly listeners</p>

          <Button className="!rounded-full !bg-slate-800 !border-purple-light !font-semibold mr-8">
            Follow
          </Button>
          <Button className="!rounded-full !bg-slate-800 !border-purple-light !font-semibold mr-8">
            Upcoming Concerts
          </Button>
        </div>
      </Row>
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
                <>
                  <VertCard
                    title={album}
                    subtitle={id}
                    imgSrc={require(`../assets/${artist.albums[album].photo}`)}
                  />
                </>
              );
            })}
        </div>
      </Row>
    </MainPage>
  );
}
