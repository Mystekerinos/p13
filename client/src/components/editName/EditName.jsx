import React, { useState } from "react";
import "../../assets/css/editName.css";

const EditName = ({ firstName, lastName, onSave }) => {
  const [editing, setEditing] = useState(false);
  const [inputFirstName, setInputFirstName] = useState(firstName);
  const [inputLastName, setInputLastName] = useState(lastName);

  const handleSave = () => {
    const firstName = `${inputFirstName}`;
    const lastName = `${inputLastName}`;
    onSave(firstName, lastName);
    setEditing(false);
  };

  const handleCancel = () => {
    setInputFirstName(firstName);
    setInputLastName(lastName);
    setEditing(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSave();
    }
  };

  if (!editing) {
    return (
      <>
        <button className="edit-button" onClick={() => setEditing(true)}>
          Edit Name
        </button>
      </>
    );
  }

  return (
    <div>
      <div className="input-container">
        <input
          className="input"
          type="text"
          placeholder=""
          value={inputFirstName}
          onChange={(e) => setInputFirstName(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <input
          className="input"
          type="text"
          placeholder=""
          value={inputLastName}
          onChange={(e) => setInputLastName(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
      <div className="button-container">
        <button className="buttons" onClick={handleSave}>
          Save
        </button>
        <button className="buttons" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditName;
