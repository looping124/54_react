import React from 'react';
import ReactDOM from 'react-dom';
import NoteDisplay from '../NoteDisplay/noteDisplay.jsx'

function Menu({notes}){
  function handleClick(e,note) {
    e.preventDefault();
    ReactDOM.render(<NoteDisplay note={note}/>, document.getElementById("top"));
  }
  let notesDisplay = notes.map(note =>
  <div key={note.key} onClick={(e)=>handleClick(e,note)}>
    <h3>{note.key}</h3>
    <p>{note.value}</p>    
  </div>)
  
  return <div>
    {notesDisplay}
  </div>
}
  

export default Menu;