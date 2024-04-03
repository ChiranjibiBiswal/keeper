import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([])

    function addNote(newNote) {
        setNotes((preValue) => {
            return [...preValue, newNote]
        })
    }

    function deleteNote(id){
        setNotes(preValue => {
            return preValue.filter((item, index) => {
                return index !== id
            })
        })
    }

  return (
    <div>
      <Header />
      <CreateArea 
        onAdd = {addNote}
      />
      {notes.map((newItem, index) => {
        return <Note 
            key = {index}
            id = {index}
            title = {newItem.title}
            content = {newItem.content}
            onDelete = {deleteNote}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;