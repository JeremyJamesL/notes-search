import { Hits } from "react-instantsearch";

function SearchResults({ isHidden }) {
  const hitsComponent = ({ hit }) => {
    return (
      <div className="flex flex-col hover:bg-red">
        <h2 className="font-bold">{hit.title}</h2>
        <h3>{hit.category}</h3>
      </div>
    );
  };
  return (
    <div className="absolute mt-5 w-full">
      {!isHidden && (
        <Hits
          hitComponent={hitsComponent}
          classNames={{
            item: "p-3 hover:bg-stone-200",
          }}
        />
      )}
      {/* {JSON.stringify(hits)} */}
    </div>
  );
}
export default SearchResults;
