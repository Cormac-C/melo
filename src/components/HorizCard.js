import React from "react";
import { Image } from "react-bootstrap";

export function HorizCard({ type, artist, title, release, duration, imgSrc }) {
  return (
    <div
      className="min-w-[32rem] bg-no-repeat bg-cover rounded-md"
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div className="backdrop-blur backdrop-brightness-75 backdrop-saturate-50 h-full w-full p-4 rounded-md flex flex-row items-center">
        <Image className="!h-auto !w-48 !mx-auto " variant="top" src={imgSrc} />
        <div className="text-white !w-48 !mx-auto">
          <p>
            <span className="text-stone-400">{type}</span> · {artist}
          </p>
          <h4>{title}</h4>
          <p className="text-stone-400">
            {release} · {duration}
          </p>
        </div>
      </div>
    </div>
  );
}
