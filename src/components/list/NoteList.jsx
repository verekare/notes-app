import React from 'react'
import Note from '../note/Note'
import styles from './NoteList.module.css'
import MyTitle from '../UI/title/MyTitle'
import MyBtnSmall from '../UI/button/MyBtnSmall'

const NoteList = ({notes, remove, edit}) => {

  return (
    <div className={styles.containerList}>
      <div className={styles.header}>
        <MyTitle>Notes</MyTitle>
        <MyBtnSmall />
      </div>
      <div className={styles.list}>
        {notes.map(note => (
          <Note 
            edit={edit}
            remove={remove}
            note={note}
            key={note.id}
          />
        ))}
      </div>
    </div>
  )
}

export default NoteList;
