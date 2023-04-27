import React, { useState } from "react";

function AsciiCodeFinder() {
  const [inputValue, setInputValue] = useState("");
  const [asciiCode, setAsciiCode] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setAsciiCode("");
  };

  const handleClick = () => {
    const code = inputValue.charCodeAt(0);
    setAsciiCode(`The ASCII code of ${inputValue} is ${code}.`);
  };

  return (
    <div>
      <h1>ASCII Code Finder</h1>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>Find ASCII Code</button>
      {asciiCode && <p>{asciiCode}</p>}
    </div>
  );
}

export default AsciiCodeFinder;
