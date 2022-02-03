import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import ShowNote from '../ShowNote/showNote.jsx'
import './styles.css';

function getLocalStorageNotes(){
  let notes = [];
  for (let index = 0; index < localStorage.length; index++) {
    const key = localStorage.key(index);
    const value = localStorage.getItem(key);
    notes.push({key,value});
  }
  return notes
}

function Menu(){
  const [notes, setnotes] = useState(getLocalStorageNotes());
  function handleSave(){
    setnotes(getLocalStorageNotes())
  }

  function newNote(event){
    // event.preventDefault();
    // let newNote = {key:'New Note',value:'New Content'}
    // localStorage.setItem(newNote.key, newNote.value);
    // ReactDOM.render(<ShowNote note={newNote}/>, document.getElementById("right"));
  }

  function handleClick(e,note) {
    e.preventDefault();
    ReactDOM.render(<ShowNote note={note} onSave={handleSave}/>, document.getElementById("right"));
  }

  
  return <div>
    {notes.map(note =>
    <div key={note.key} onClick={(e)=>{handleClick(e,note)}} className='noteMenu'>
      <h3>{note.key}</h3>
      <p>{note.value}</p>    
    </div>)}
    <button onClick={(event)=>newNote(event)}>New note</button>
  </div>
}
  

export default Menu;