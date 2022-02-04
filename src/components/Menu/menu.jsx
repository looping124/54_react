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
    window.location.reload();
  }

  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  function onChangeValue(event){
    console.log(event.target.value);
    setContent(event.target.value)
  }
  function onChangeTitle(event){
    console.log(event.target.value);
    setTitle(event.target.value)
  }

  function handleClick(e,note) {
    e.preventDefault();
    setContent(note.value)
    setTitle(note.key)
    // ReactDOM.render(<ShowNote content={content}  title={title}onSave={handleSave} onChangeValue={onChangeValue}/>, document.getElementById("right"));
  }

  
  return <>
<div id="left">
{notes.map(note =>
    <div key={note.key} onClick={(e)=>{handleClick(e,note)}} className='noteMenu'>
      <h3>{note.key}</h3>
      <p>{note.value}</p>    
    </div>)}
    <button onClick={(event)=>newNote(event)}>New note</button>
  </div>
    <div id="right">
    <ShowNote content={content}  title={title}onSave={handleSave} onChangeValue={onChangeValue} onChangeTitle={onChangeTitle}/>
  </div>
</>
}
  

export default Menu;