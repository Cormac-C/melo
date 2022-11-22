import { React } from "react";
import { Sidebar, Topbar } from "../components";

export function Home() {
  return (
    <main className="App w-screen h-screen flex flex-row">
      <Sidebar />
      <div className="w-full flex flex-col">
        <Topbar />
        <p>wowzers</p>
      </div>
    </main>
  );
}
