import React from "react";
import { Image } from "react-bootstrap";

export function VertCard({ title, subtitle, imgSrc, children }) {
  // Default for development purposes
  if (imgSrc === undefined) imgSrc = require("../assets/bieberAlbum.png");

  return (
    <div
      className="w-32 sm:w-60 h-100% bg-no-repeat bg-cover rounded-md"
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      {/* TODO: For some reason backdrop tailwind classes affect absolute positioning which is really annoying */}
      <div className="sm:backdrop-blur sm:backdrop-brightness-75 sm:backdrop-saturate-50 h-full w-full max-sm:p-1 sm:p-4 rounded-md">
        <Image className="!h-auto !w-full !mx-auto pb-4" variant="top" src={imgSrc} />
        <div className="flex">
          <div className="text-white flex-1">
            <h4 className="max-sm:text-xs m-0">{title}</h4>
            <p className="max-sm:hidden m-0">{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
