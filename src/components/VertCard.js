import React from "react";
import { Image } from "react-bootstrap";

export function VertCard({ title, subtitle, imgSrc }) {
  return (
    <div
      className="w-60 bg-no-repeat bg-cover rounded-md"
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div className="backdrop-blur backdrop-brightness-75 backdrop-saturate-50 h-full  w-full p-4 rounded-md">
        <Image className="!h-auto !w-48 !mx-auto " variant="top" src={imgSrc} />
        <div className="text-white !w-48 !mx-auto">
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
