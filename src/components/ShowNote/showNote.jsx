import './styles.css';
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import NoteDisplay from '../NoteDisplay/noteDisplay.jsx'


function ShowNote({content, title,onSave,onChangeValue,onChangeTitle}) {

  // const [content, setContent] = useState(note.value);
  // const [title, setTitle] = useState(note.key);
    useEffect(() => {
      console.log(title, content)
    }, [title, content]);


  function saveContent(event){
    event.preventDefault()
    localStorage.setItem(title,content)
    onSave()
  }

  function changeContent(event){
    onChangeValue(event)
  }
  
  function saveTitle(event){

    event.preventDefault()
    localStorage.setItem(content,title)
    onSave()
  }

  function changeTitle(event){
    onChangeTitle(event)
  }

  return (
    <>
      <div id="top">
        <h1>{title}</h1>
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