"use client";

import { useState, useEffect } from "react";

const getRandomDog = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  return data.message;
};

const getDogBreeds = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  return Object.keys(data.message); // Object.keys returns an array of the object's keys
};

export default function Page() {
  const [dogUrl, setDogUrl] = useState(null);
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");

  const loadRandomDog = async () => {
    const url = await getRandomDog();
    setDogUrl(url);
  };

  const loadBreeds = async () => {
    const breeds = await getDogBreeds();
    setBreeds(breeds);
  };

  const getBreedImage = async (breed) => {
    const response = await fetch(
      `https://dog.ceo/api/breed/${breed}/images/random`
    );

    const data = await response.json();
    console.log(data);
    return data.message;
  };

  const loadBreedsImage = async (breed) => {
    const breedImage = await getBreedImage(breed);
    setDogUrl(breedImage);
  };

  useEffect(() => {
    loadRandomDog();
    loadBreeds();
  }, []); // loadRandomDog is called once after the first render and never again

  useEffect(() => {
    if (selectedBreed === "") return;
    loadBreedsImage(selectedBreed);
  }, [selectedBreed]); // loadBreedsImage is called whenever selectedBreed changes

  return (
    <main>
      <p>Random Dog</p>
      <img src={dogUrl} alt="A random dog" />
      <select
        name="breeds"
        id="breeds"
        onChange={(event) => setSelectedBreed(event.target.value)}
      >
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </main>
  );
}
