import React, {useState} from 'react';
function NoteDisplay({note}) {
  return (
    <div>
      <h1>{note.key}</h1>
      <p>{note.value}</p>
    </div>
  );
}

export default NoteDisplay;