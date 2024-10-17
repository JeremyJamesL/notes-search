import { Hits, Highlight, useInstantSearch } from "react-instantsearch";

function SearchResults({ currentQuery, updateCurrentNote }) {
  const { uiState, setIndexUiState } = useInstantSearch();
  const query = uiState.coding_notes.query;

  const hitsComponent = ({ hit }) => {
    return (
      <div
        className="flex flex-col hover:bg-red cursor-pointer"
        onClick={() => {
          updateCurrentNote(hit.objectID);
          setIndexUiState((prevIndexUiState) => ({
            ...prevIndexUiState,
            query: "",
          }));
        }}
      >
        <h2 className="font-bold">
          <Highlight attribute="title" hit={hit} />
        </h2>
        <h3>
          <Highlight attribute="category" hit={hit} />
        </h3>
      </div>
    );
  };
  return (
    <div className="absolute mt-5 w-full bg-zinc-800">
      <Hits
        hitComponent={hitsComponent}
        classNames={{
          root: "border-2 border-t-0 border-b-0 border-zinc-500",
          item: `p-3 bg-zinc-800 border-zinc-500 border-b-2 hover:bg-zinc-500 ${
            query === undefined ? "hidden" : "block"
          }`,
        }}
      />
    </div>
  );
}
export default SearchResults;
