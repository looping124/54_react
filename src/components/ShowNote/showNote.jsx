import './styles.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import NoteDisplay from '../NoteDisplay/noteDisplay.jsx'


function ShowNote({note,onSave}) {
  const [content, setContent] = useState(note.value);
  const [title, setTitle] = useState(note.key);

  function saveContent(event){
    console.log(content);
    console.log(title);
    event.preventDefault()
    localStorage.setItem(title,content)
    onSave()
  }

  function changeContent(event){
    const value = event.target.value
    console.log(value);
    setContent(value)
  }
  
  function saveTitle(event){
    console.log(title);
    event.preventDefault()
    localStorage.setItem(note.key,title)
    onSave()
  }

  function changeTitle(event){
    const titleValue = event.target.value
    console.log(titleValue);
    setTitle(titleValue)
  }

  return (
    <>
      <div id="top">
        <h1>{note.key}</h1>
        <p>{content}</p>
    </div>
      <div id="bottom">
        <label htmlFor="Title">Title</label> <br />
        <input type="text" value={title} id="titleInput"onChange={changeTitle}/><br />
        <label htmlFor="Content">Content</label><br />
        <input type="text" value={content} id="valueInput" onChange={changeContent}/><br />
        <button id="saveNote" onClick={(event)=>saveContent(event)}>Save</button>
      </div>
    </>
  );
}

export default ShowNote;