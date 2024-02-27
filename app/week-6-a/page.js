"use client";

import Counter from "./counter.js";

//import Dog from "./dog.js";
import DogList from "./dog-list.js";
import DogForm from "./dog-form.js";
import DogData from "./dog-data.json";
import { useState } from "react";

export default function Page() {
  const [dogs, setDogs] = useState(DogData);

  const addDog = (dog) => {
    setDogs([...dogs, dog]); //This updates the state with a new array that includes the previous dogs and the new dog.
    //the spread operator (...) is used to copy the previous dogs array.
    //the goal is to update the state with a new array that includes the previous dogs and the new dog.
    //we cannot do dogs.push(dog) because we cannot mutate the state directly.
  };

  const deleteDog = (id) => {
    const newDogs = dogs.filter((dog) => dog.id !== id);
    //This creates a new array that includes all the dogs except the one with the id that matches the id of the dog to be deleted.
    setDogs(newDogs);
  };

  return (
    <main>
      <h1>Week 6 A</h1>
      <DogList dogs={dogs} onDeleteDog={deleteDog} />
      <DogForm onAddDog={addDog} />
    </main>
  );
}
