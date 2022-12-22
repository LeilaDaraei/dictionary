import React from "react";
import "./Phonetic.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
  function playAudio(event) {
    let audio = new Audio(props.phonetic.audio);
    event.preventDefault();
    audio.play();
  }
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <a href={props.phonetic.audio}>
          <FontAwesomeIcon icon={faCirclePlay} onClick={playAudio} />
        </a>
        <span className="text">{props.phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
