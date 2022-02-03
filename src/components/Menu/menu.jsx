import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import NoteDisplay from '../NoteDisplay/noteDisplay.jsx'
import MarkdownInput from '../MarkdownInput/markdownInput.jsx'

function Menu({notes}){
  function newNote(event){
    console.log('TEST');
    let newNote = {key:'New Note',value:'New Content'}
    ReactDOM.render(<NoteDisplay note={newNote}/>, document.getElementById("top"));
    ReactDOM.render(<MarkdownInput note={newNote}/>, document.getElementById("bottom"));
  }
  function handleClick(e,note) {
    e.preventDefault();
    ReactDOM.render(<NoteDisplay note={note}/>, document.getElementById("top"));
    ReactDOM.render(<MarkdownInput note={note}/>, document.getElementById("bottom"));
  }
  let notesDisplay = notes.map(note =>
  <div key={note.key} onClick={(e)=>handleClick(e,note)}>
    <h3>{note.key}</h3>
    <p>{note.value}</p>    
  </div>)
  
  return <div>
    {notesDisplay}
    <button onClick={(event)=>newNote(event)}>New note</button>
  </div>
}
  

export default Menu;