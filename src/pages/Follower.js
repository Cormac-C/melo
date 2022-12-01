import { React } from "react";
import { MainPage } from "./Middleware";
import { Row } from "react-bootstrap";
import { VertCard } from "../components";

const followers = [
  { name: "Andrea Nicastro", src: "andrea.png" },
  { name: "Gary Kang", src: "gary.png" },
];

export function Follower() {
  return (
    <MainPage>
      <h2 className="text-white my-4">Your Followers</h2>
      <p className="text-gray-300 mb-4">{followers.length} Followers</p>
      <Row className="mb-8">
        <div
          className="
          flex flex-row overflow-x-scroll space-x-4 p-2
          scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded
        "
        >
          {followers.map((follow) => {
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
