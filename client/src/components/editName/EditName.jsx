// editName.jsx

import React, { useState } from "react";

function EditName() {
  // State variables to store the first name and last name
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Function to handle changes in the first name input
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  // Function to handle changes in the last name input
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  return (
    <div>
      {/* First name input field */}
      <label>
        First Name:
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
      </label>
      <br />

      {/* Last name input field */}
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </label>
      <br />

      {/* Display the edited name */}
      <p>
        Edited Name: {firstName} {lastName}
      </p>
    </div>
  );
}

export default EditName;
