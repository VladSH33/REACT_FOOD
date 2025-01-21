import { useState } from "react";
import "./Search.css";

import React from "react";

const Search = ({ cb = Function.prototype }) => {
  const [value, setValue] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className="search">
      <input
        type="text"
        id="search-field"
        placeholder="search"
        onKeyDown={handleKey}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="input"
      />
      <button
        className="btn"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
        }}
        onClick={handleSubmit}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
