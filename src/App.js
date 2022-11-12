import logo from "./logo.svg";
import "./App.css";
import { Note } from "./components/Note/Note";
import { NoteModal } from "./components/NoteModal/NoteModal";
import { useEffect, useState } from "react";
import { ApiClient } from "./api/ApiClient";

function App() {
  const todoAppClient = new ApiClient("http://localhost:8080/todos", "123123");
  const notes = [
    {
      title: "A small story",
      description: "Once upon time in mumbai, there lived a guy named Goon!",
    },
    {
      title: "Lorem ipsum is trouble",
      description: "I don't know what this is!",
    },
    {
      title: "What a pleasant day!",
      description:
        "Nice weather, light drizzle and wonderful meal throughout the day.",
    },
    {
      title: "A small story",
      description: "Once upon time in mumbai, there lived a guy named Goon!",
    },
    {
      title: "Lorem ipsum is trouble",
      description: "I don't know what this is!",
    },
    {
      title: "What a pleasant day!",
      description:
        "Nice weather, light drizzle and wonderful meal throughout the day.",
    },
    {
      title: "A small story",
      description: "Once upon time in mumbai, there lived a guy named Goon!",
    },
    {
      title: "Lorem ipsum is trouble",
      description: "I don't know what this is!",
    },
    {
      title: "What a pleasant day!",
      description:
        "Nice weather, light drizzle and wonderful meal throughout the day.",
    },
  ];

  const [isOpen, setOpen] = useState(false);

  const [currentNotes, setNotes] = useState(notes);
  const addNewNote = (title, description) => {
    // saving to the database
    todoAppClient.saveTodo({ title, description });
    currentNotes.push({ title, description });
    closeModal();
  };

  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    todoAppClient.listTodos().then((res) => {
      // setNotes((prevNotes) => [
      //   ...prevNotes,
      //   { title: res.id, description: res.content },
      // ]);
      console.log(res);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className="App-header">
        <p className="App-title">Todo app</p>
        <div className="App-note-grid">
          {currentNotes.map((note, index) => (
            <Note
              key={`${note.title}.${index}`}
              title={note.title}
              description={note.description}
            />
          ))}
        </div>
        <button className="AddNote-button" onClick={() => setOpen(true)}>
          +
        </button>
        {isOpen && (
          <NoteModal
            title="Create a new note"
            noteTitle="Enter a note title"
            description="Enter a note description here"
            textOk="Add"
            textNok="Cancel"
            onOkClicked={(title, description) => addNewNote(title, description)}
            onNokClicked={closeModal}
          />
        )}
      </header>
    </>
  );
}

export default App;
