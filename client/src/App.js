import "./index.css";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Note from "./components/Note";
import axios from "axios";

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
    <div className="flex gap-5">
      <Nav updateSelectedNote={updateCurrentNote} />
      <Note content={noteContent} />
    </div>
  );
}

export default App;
