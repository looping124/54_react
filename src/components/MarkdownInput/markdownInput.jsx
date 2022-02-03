import './styles.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import NoteDisplay from '../NoteDisplay/noteDisplay.jsx'


function MarkdownInput({note}) {
  // const [data, setNote] = useState(note.value);
  function changeContent(event){
    let content = document.getElementById('valueInput').value
    console.log(content);
    event.preventDefault()
    localStorage.setItem(note.key,content)
    ReactDOM.render(<NoteDisplay note={note}/>, document.getElementById("top"));
  }

  return (
    <div>
      <label htmlFor="Title">Title</label> <br />
      <input type="text" defaultValue={note.key} id="titleInput"/><br />
      <label htmlFor="Titre">Content</label><br />
      <input type="text" defaultValue={note.value} id="valueInput"/><br />
      <button id="saveNote" onClick={(event)=>changeContent(event)}>Save</button>
    </div>
  );
}

export default MarkdownInput;