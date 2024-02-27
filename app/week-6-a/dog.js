import React from "react";
import DogList from "./dog-list";

export default function Dog({ id, name, age, onDeleteDog }) {
  return (
    <div>
      <h3>Dog</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Id: {id}</p>
      <button onClick={() => onDeleteDog(id)}>Delete</button>
    </div>
  );
}
