import { SearchBox } from "react-instantsearch";
import SearchResults from "./SearchResults";

function Header({ updateCurrentNote }) {
  return (
    <header className="border-b-2 py-5">
      <div className="max-w-7xl m-auto px-3 flex justify-between">
        <h1 className="text-lg font-mono">
          Jezl notes search
          <span className="text-amber-600 inline-block">_</span>
        </h1>
        <div className="relative">
          <SearchBox
            classNames={{
              input: "bg-transparent border-0 text-white",
              form: "bg-transparent border-zinc-500 border-[1px] rounded-full active:border-red",
            }}
          />
          <SearchResults updateCurrentNote={updateCurrentNote} />
        </div>
      </div>
    </header>
  );
}
export default Header;
