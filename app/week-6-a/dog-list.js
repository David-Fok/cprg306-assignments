"use client";

//import { useState } from "react";
import Dog from "./dog.js";
//import DogData from "./dog-data.json";

export default function DogList({ dogs, onDeleteDog }) {
  return (
    <div>
      <h2>Dog List</h2>
      {dogs.map((dog, index) => (
        <Dog
          key={dog.id}
          id={dog.id}
          name={dog.name}
          age={dog.age}
          onDeleteDog={onDeleteDog}
        />
      ))}
    </div>
  );
}
