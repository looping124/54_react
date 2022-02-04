import './styles.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu/menu.jsx'
import NoteDisplay from './components/NoteDisplay/noteDisplay.jsx'
import MarkdownInput from './components/ShowNote/showNote.jsx'
import ShowNote from './components/ShowNote/showNote.jsx';

function App() {

  return (
    <>
        <Menu/>
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
