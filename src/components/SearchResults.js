import { React } from "react";
import { useSearchParams } from "react-router-dom";

export function SearchResults() {
  let [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  return (
    <h2 className="text-white my-4">{ query }</h2>
  );
}
