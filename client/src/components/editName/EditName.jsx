import React, { useState } from "react";
import "../../assets/css/editName.css";

const EditName = ({ fullName, onSave }) => {
  const [editing, setEditing] = useState(false);
  const [inputFirstName, setInputFirstName] = useState(
    fullName ? fullName.split(" ")[0] : ""
  );
  const [inputLastName, setInputLastName] = useState(
    fullName ? fullName.split(" ")[1] : ""
  );

  const handleSave = () => {
    const newName = `${inputFirstName} ${inputLastName}`;
    onSave(newName);
    setEditing(false);
  };

  const handleCancel = () => {
    setInputFirstName(fullName ? fullName.split(" ")[0] : "");
    setInputLastName(fullName ? fullName.split(" ")[1] : "");
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
          placeholder="Tony"
          value={inputFirstName}
          onChange={(e) => setInputFirstName(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <input
          className="input"
          type="text"
          placeholder="Jarvis"
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
