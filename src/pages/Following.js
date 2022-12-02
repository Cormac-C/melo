import React, { useContext } from "react";
import { MainPage } from "./Middleware";
import { Row } from "react-bootstrap";
import { VertCard } from "../components";
import UserDataContext from "../context";
import Music from "../Music";

const artists = Music.getArtists();

export function Following() {
  const following = [
    { name: "Andrea Nicastro", src: "andrea.png" },
    { name: "Gary Kang", src: "gary.png" },
  ];

  const [{ followedArtists }] = useContext(UserDataContext);

  for (const artist of followedArtists) {
    following.push({ name: artist, src: artists[artist].photo });
  }

  return (
    <MainPage>
      <h2 className="text-white my-4">Your Following</h2>
      <p className="text-gray-300 mb-4">{following.length} Following</p>
      <Row className="mb-8">
        <div
          className="
          flex flex-row overflow-x-scroll space-x-4 p-2
          scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded
        "
        >
          {following.map((follow) => {
            return (
              <VertCard
                title={follow.name}
                imgSrc={require(`../assets/${follow.src}`)}
              />
            );
          })}
        </div>
      </Row>
    </MainPage>
  );
}
