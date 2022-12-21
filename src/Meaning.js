import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        {props.meaning.definitions.map((definition, index) => {
          return (
            <div key={index}>
              <p>
                <strong>Definition:</strong>
                {definition.definition}
                <br />
                <strong>Example:</strong>
                <em>{definition.example}</em>
                <br />
                <Synonyms synonysm={definition.synonyms} />
                <br />
              </p>
            </div>
          );
        })}
      </p>
    </div>
  );
}
