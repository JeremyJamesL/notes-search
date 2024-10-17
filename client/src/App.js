import "instantsearch.css/themes/satellite.css";
import "./index.css";
import { useState, useEffect } from "react";
import { liteClient as algoliasearch } from "algoliasearch/lite";
import { InstantSearch, Configure } from "react-instantsearch";
import Header from "./components/Header";
import BreadCrumbs from "./components/BreadCrumbs";
import Nav from "./components/Nav";
import Note from "./components/Note";
import axios from "axios";

const searchClient = algoliasearch(
  "YSWWVAX5RB",
  "9fb3db0222f7b5aef0e2b30791ee6201"
);

function App() {
  const [currentNote, updateCurrentNote] = useState();
  const [noteContent, updateNoteContent] = useState();

  useEffect(() => {
    if (!currentNote) return;

    const getNewNote = async () => {
      const response = await axios.get(
        `http://localhost:3001/notes/get-note?note=${currentNote}`
      );

      updateNoteContent(response.data.content);
    };

    getNewNote().catch((err) => console.error(err));
  }, [currentNote]);

  return (
    <InstantSearch searchClient={searchClient} indexName="coding_notes">
      <Configure hitsPerPage={5} />
      <div className="bg-zinc-900 text-white">
        <Header updateCurrentNote={updateCurrentNote} />
        <BreadCrumbs />
        <main className="flex gap-5 py-5 px-3 max-w-7xl m-auto">
          <Nav updateSelectedNote={updateCurrentNote} />
          <Note content={noteContent} />
        </main>
      </div>
    </InstantSearch>
  );
}

export default App;
