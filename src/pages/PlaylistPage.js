import React from "react";
import { useParams } from "react-router-dom";
import { MainPage } from "./Middleware";

export function PlaylistPage() {
  let { id } = useParams();
  console.log(id);

  return (
    <MainPage>
      <p className="text-white">{ id }</p>
    </MainPage>
  );
}
