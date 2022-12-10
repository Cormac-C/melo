import { React } from "react";
import { useSearchParams } from "react-router-dom";
import { Sidebar, Topbar } from "../components";
import { SearchResults } from "../components/SearchResults";

export function MainPage({ children }) {
  let [searchParams] = useSearchParams();

  return (
    <main className="App text-white w-screen h-[90vh] flex flex-row bg-zinc-800 sm:h-screen">
      <Sidebar />
      <div className="flex flex-col overflow-x-hidden w-screen">
        <Topbar />
        <div className="pl-6">
          {searchParams.get("q") ? <SearchResults /> : children}
        </div>
      </div>
    </main>
  );
}
