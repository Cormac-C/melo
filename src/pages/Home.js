import { React } from "react";
import { MainPage } from "./Middleware";
import { Row } from "react-bootstrap";
import playlistCover1 from "../assets/playlistCover1.png";
import playlistCover2 from "../assets/playlistCover2.png";
import weekndAlbum from "../assets/weekndAlbum.png";
import dojaAlbum from "../assets/dojaAlbum.png";
import bieberAlbum from "../assets/bieberAlbum.png";
import keemAlbum from "../assets/keemAlbum.png";
import { HorizCard, VertCard } from "../components";

export function Home() {
  return (
    <MainPage>
      <h2 className="text-white my-4">Recently Played</h2>
      <Row className="w-full mb-8">
        <div className="flex flex-row overflow-scroll space-x-4">
          <VertCard
            title="Car jamz everyone knows"
            subtitle="By Andrea Nicastro"
            imgSrc={playlistCover1}
          />
          <VertCard
            title="Shower Tunes"
            subtitle="My favourite songs to sing in the shower"
            imgSrc={playlistCover2}
          />
          <VertCard
            title="Car jamz everyone knows"
            subtitle="By Andrea Nicastro"
            imgSrc={playlistCover1}
          />
          <VertCard
            title="Shower Tunes"
            subtitle="My favourite songs to sing in the shower"
            imgSrc={playlistCover2}
          />
          <VertCard
            title="Car jamz everyone knows"
            subtitle="By Andrea Nicastro"
            imgSrc={playlistCover1}
          />
          <VertCard
            title="Shower Tunes"
            subtitle="My favourite songs to sing in the shower"
            imgSrc={playlistCover2}
          />
        </div>
      </Row>
      <h2 className="text-white my-4">Recommended for you</h2>
      <Row className="w-full mb-8">
        <div className="flex flex-row overflow-scroll space-x-4">
          <HorizCard
            type="Album"
            artist="The Weeknd"
            title="After Hours"
            release="2020"
            duration="14 songs, 56 min 17 sec"
            imgSrc={weekndAlbum}
          />
          <HorizCard
            type="Album"
            artist="Doja Cat"
            title="Planet Her (Deluxe)"
            release="2021"
            duration="19 songs, 59 min 28 sec"
            imgSrc={dojaAlbum}
          />
          <HorizCard
            type="Album"
            artist="The Weeknd"
            title="After Hours"
            release="2020"
            duration="14 songs, 56 min 17 sec"
            imgSrc={weekndAlbum}
          />
        </div>
      </Row>
      <h2 className="text-white my-4">Trending Now</h2>
      <Row className="w-full mb-8">
        <div className="flex flex-row overflow-scroll space-x-4">
          <HorizCard
            type="Song"
            artist="Justin Bieber, Don Toliver"
            title="Honest (feat. Don Toliver)"
            release="2022"
            duration="3 min 13 sec"
            imgSrc={bieberAlbum}
          />
          <HorizCard
            type="Song"
            artist="Baby Keem"
            title="HONEST"
            release="2019"
            duration="2 min 52 sec"
            imgSrc={keemAlbum}
          />
          <HorizCard
            type="Song"
            artist="Justin Bieber, Don Toliver"
            title="Honest (feat. Don Toliver)"
            release="2022"
            duration="3 min 13 sec"
            imgSrc={bieberAlbum}
          />
          <HorizCard
            type="Song"
            artist="Baby Keem"
            title="HONEST"
            release="2019"
            duration="2 min 52 sec"
            imgSrc={keemAlbum}
          />
        </div>
      </Row>
    </MainPage>
  );
}
