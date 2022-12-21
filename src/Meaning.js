import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        {props.meaning.definitions.map((definition, index) => {
          return (
            <div key={index}>
              <p>{definition.definition}</p>
              <br />
              <em>{definition.example}</em>
            </div>
          );
        })}
      </p>
    </div>
  );
}
