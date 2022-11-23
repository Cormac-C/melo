import { React } from "react";
import { useSearchParams } from "react-router-dom";
import { Sidebar, Topbar } from "../components";
import { SearchResults } from "../components/SearchResults";

export function MainPage({ children }) {
  let [searchParams] = useSearchParams();

  return (
    <main className="App w-screen h-screen flex flex-row bg-zinc-800">
      <Sidebar />
      <div className="flex flex-col overflow-x-hidden">
        <Topbar />
        {searchParams.get("q") ? <SearchResults /> : children}
      </div>
    </main>
  );
}
