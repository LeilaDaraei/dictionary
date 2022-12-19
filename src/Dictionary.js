import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  function handleResponse(response) {
    console.log(response.data);
  }
  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword}`);
    let apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/sunset";
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="enter a word"
          autoFocus={true}
          onChange={handleKeywordChange}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
