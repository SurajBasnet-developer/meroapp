import React, { useState } from "react";

function CharacterInput() {
  const [unicode, setUnicode] = useState("");

  const handleChange = (event) => {
    setUnicode(event.target.value.charCodeAt(0).toString(16));
  };

  return (
    <div>
      <label htmlFor="character">Enter a character:</label>
      <input type="text" id="character" onChange={handleChange} />
      <p>The Unicode of the character is: {unicode}</p>
    </div>
  );
}

export default CharacterInput;
