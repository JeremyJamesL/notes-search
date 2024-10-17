import { useState } from "react";
import { SearchBox } from "react-instantsearch";
import SearchResults from "./SearchResults";

function Header() {
  const [resultsHidden, updateResultsHidden] = useState(true);

  const queryHook = (query, search) => {
    updateResultsHidden(query.length === 0);
    search(query);
  };
  return (
    <header className="border-b-2 py-5">
      <div className="max-w-4xl m-auto flex justify-between">
        <h1 className="text-xl">Jezl notes search__</h1>
        <div className="relative">
          <SearchBox queryHook={queryHook} />
          <SearchResults isHidden={resultsHidden} />
        </div>
      </div>
    </header>
  );
}
export default Header;
