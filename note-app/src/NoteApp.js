import React, { useState } from 'react';
import './App.css';

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddNote = () => {
    if (inputValue.trim() !== '') {
      setNotes([...notes, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <h1>Simple Note App</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your note..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleAddNote}
        >
          Add Note
        </button>
      </div>
      <ul className="list-group">
        {notes.map((note, index) => (
          <li className="list-group-item" key={index}>
            {note}
            <button
              className="btn btn-danger btn-sm float-end"
              onClick={() => handleDeleteNote(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteApp;
