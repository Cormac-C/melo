import { React } from "react";
import { MainPage } from "./Middleware";
import { Row } from "react-bootstrap";
import playlistCover1 from "../assets/playlistCover1.png";
import playlistCover2 from "../assets/playlistCover2.png";
import { VertCard } from "../components";

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
    </MainPage>
  );
}
