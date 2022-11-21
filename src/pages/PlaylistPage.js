import React from "react";
import { useParams } from "react-router-dom";
import { Sidebar } from "../components/Sidebar"

export function PlaylistPage() {
  let { id } = useParams();
  console.log(id);

  return (
    <main className="App">
      <Sidebar />
      <p>{ id }</p>
    </main>
  );
}
