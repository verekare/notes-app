import { useState } from 'react';
import './App.css';
import NoteForm from './components/form/NoteForm';
import NoteList from './components/list/NoteList';

function App() {
  const [notes, setNotes] = useState([]);

  const removeNote = (note) => {
    console.log(note);
    setNotes(notes.filter(n => note.id !== n.id));
  }

  const editNote = (note) => {
    
  }

  const addNote = (newNote) => {
    if (newNote.content.trim() === '') {
      console.log('Empty note :( ')
    } else {
    setNotes([...notes, newNote]);
    }
  }
  return (
    <div className="App">
      <NoteList 
        edit={editNote}
        remove={removeNote}
        notes={notes}
      />
      <NoteForm 
        edit={editNote}
        create={addNote} 
      />
    </div>
  );
}

export default App;
