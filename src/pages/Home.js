import { React } from "react";
import { MainPage } from "./Middleware";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Row } from "react-bootstrap";
import playlistCover from "../assets/playlistCover.png";
import { Image } from "react-bootstrap";

export function Home() {
  return (
    <MainPage>
      <p className="text-white">wowzers</p>
      <Row className="w-3/4">
        <h1 className="text-white">Recently Played</h1>
        <div className="flex flex-row overflow-scroll">
          <div
            className="w-60 bg-no-repeat bg-cover rounded-md"
            style={{ backgroundImage: `url(${playlistCover})` }}
          >
            <div className="backdrop-blur backdrop-brightness-75 backdrop-saturate-50 h-full  w-full p-4 rounded-md">
              <Image
                className="!h-auto !w-48 !mx-auto "
                variant="top"
                src={playlistCover}
              />
              <div className="text-white !w-48 !mx-auto">
                <h4>Car jamz everyone knows</h4>
                <p>By Andrea Nicastro</p>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </MainPage>
  );
}
