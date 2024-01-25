import React, { useRef, useState } from 'react'
import MyInput from '../UI/input/MyInput';
import styles from './NoteForm.module.css'

const NoteForm = ({create}) => {
  const [note, setNote] = useState({content: ''});
  const inputRef = useRef(null);

  const createNote = (e) => {
    e.preventDefault();
    note.id = Date.now();
    create(note);
    setNote({title: '', content: ''})
    inputRef.current.focus();
  }

  const editNote = (e) => {
    setNote({content: e.target.value});
  }
  
  const noteTitle = {
    fontSize: 24,
    fontWeight: 700,
  }
  return (
    <div className={styles.formNote}>
        {/* <MyTitle>New note</MyTitle> */}

        {/* <label>Title:</label> */}
        <MyInput 
            style={noteTitle}
            ref={inputRef}
            value={note.content}
            onChange={(e) => setNote({...note, content: e.target.value})}
            type="text" 
            placeholder='* Note editor *'
        />

        <button onClick={createNote}>Add note
        </button>
    </div>
  )
}

export default NoteForm
