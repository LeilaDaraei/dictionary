import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>{" "}
        <span class="text">{props.phonetic.text}</span>
      </div>
    );
  } else {
    return <div>{props.phonetic.text}</div>;
  }
}
