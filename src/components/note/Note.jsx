import React from 'react';
import styles from './Note.module.css';
import MyBtn from '../UI/button/MyBtn'

const Note = ({note, remove, edit}) => {
  return (
    <div className={styles.itemNote}>
      <div>
        {/* <h3>{note.title}</h3> */}
        <p>{note.content}</p>
      </div>
      
      <div>
        <MyBtn onClick={() => edit(note)}>Edit</MyBtn>
        <MyBtn onClick={() => remove(note)}>Delete</MyBtn>
      </div>
    </div>
  );
};

export default Note;
