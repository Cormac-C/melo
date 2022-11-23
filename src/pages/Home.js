import { React } from "react";
import { MainPage } from "./Middleware";
import { Row } from "react-bootstrap";
import playlistCover1 from "../assets/playlistCover1.png";
import playlistCover2 from "../assets/playlistCover2.png";
import weekndAlbum from "../assets/weekndAlbum.png";
import dojaAlbum from "../assets/dojaAlbum.png";
import { HorizCard, VertCard } from "../components";

export function Home() {
  return (
    <MainPage>
      <h2 className="text-white">Recently Played</h2>
      <Row className="w-full">
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
      <h2 className="text-white">Recommended for you</h2>
      <Row className="w-full">
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
    </MainPage>
  );
}
