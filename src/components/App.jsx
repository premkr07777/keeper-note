import './App.css';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import CreateArea from './CreateArea';
import { useState } from 'react';

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(note){
    setNotes(prevNotes =>{
      return [...prevNotes, note];
    })
  }

  function deleteNote(id){
    setNotes(prevNotes =>{
      return prevNotes.filter((noteItem, index) =>{
        return index !== id;
      });
    });
  }
  return (
   <>
    <Header />
    <CreateArea onAdd={addNote} />
    {notes.map((noteItem, index) =>{
      return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />
    })}
    <Footer />
   </>
  );
}

export default App;
