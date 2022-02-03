import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu/menu.jsx'
import NoteDisplay from './components/NoteDisplay/noteDisplay.jsx'
import MarkdownInput from './components/MarkdownInput/markdownInput.jsx'

function App() {
  let notes = [];
  for (let index = 0; index < localStorage.length; index++) {
    const key = localStorage.key(index);
    const value = localStorage.getItem(key);
    notes.push({key,value});
  }
  return (
    <>
      <div id="left">
        <Menu notes={notes}/>
      </div>
      <div id="right">
        <div id="top">
        </div>
        <div id="bottom">
          <MarkdownInput/>
        </div>
      </div>
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
