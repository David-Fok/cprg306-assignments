"use client";

//import {react} from "react";

import { useState } from "react";

export default function DogForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [breed, setBreed] = useState("");

  console.log("server");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const dog = { name, age, breed };
    console.log(dog);
    alert(JSON.stringify(dog));
    setName("");
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          className="text-black"
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
        <label htmlFor="breed">Breed</label>
        <input
          type="text"
          id="breed"
          value={breed}
          onChange={(event) => setBreed(event.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
