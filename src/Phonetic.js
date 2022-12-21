import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <div>{props.phonetic.text}</div>
      <a href={props.phonetic.audio}>listen</a>
    </div>
  );
}
