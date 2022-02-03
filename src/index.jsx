import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom';

function Menu() {
  let notes = [];
  for (let index = 0; index < localStorage.length; index++) {
    const key = localStorage.key(index);
    const value = localStorage.getItem(key);
    //data.startsWith('myNote')
    //document.getElementById("left").innerHTML += `test0`;
    if (key.startsWith('myNote')) {
      notes.push({key,value});
    }    
  }
  let notesDisplay = notes.map(note=><div key={note.key}>{note.value}</div>)
  
  console.log(notes)
  return (
    <div>
      {notesDisplay}
    </div>
  );
}
  
function NoteDisplay() {
  return (
    <div>
      <h1>NoteDisplay</h1>
    </div>
  );
}
function MarkdownInput() {
  return (
    <div>
      <h1>MarkdownInput</h1>
    </div>
  );
}

ReactDOM.render(<Menu />, document.getElementById("left"));
ReactDOM.render(<NoteDisplay />, document.getElementById("top"));
ReactDOM.render(<MarkdownInput />, document.getElementById("bottom"));
