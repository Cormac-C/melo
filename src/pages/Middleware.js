import { React } from "react";
import { Sidebar, Topbar } from "../components";

export function MainPage({children}) {
  return (
    <main className="App w-screen h-screen flex flex-row bg-zinc-800">
      <Sidebar />
      <div className="w-full flex flex-col">
        <Topbar />
        { children }
      </div>
    </main>
  );
}
