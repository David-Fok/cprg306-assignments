"use client";

export default function Page() {
  const dogs = [
    {
      id: 1,
      name: "Winky",
      description: "abc",
      imageUrl:
        "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Second Dog",
      description: "haha2",
      imageUrl:
        "https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Third Dog",
      description: "33333",
      imageUrl:
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Fourth Dog",
      description: "haha4444",
      imageUrl:
        "https://images.pexels.com/photos/733416/pexels-photo-733416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  dogs.sort((a, b) => {
    a.name.localeCompare(b.name);
  });
  /*
  dogs.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  });
  */

  const filteredDogs = dogs.filter((dog) => dog.id !== 2);
  console.log(filteredDogs);

  const handleClick = (id) => {
    alert(id);
  };

  return (
    <main className="bg-slate-700 sm:bg-slate-500 md:bg-slate-300">
      <h1 className="text-4xl">Week 5 A</h1>
      <h2>My Dog</h2>
      {dogs.map((dog) => (
        <div
          key={dog.id}
          onClick={() => handleClick(dog.id)}
          className="bg-white rounded-lg p-4 m-4"
        >
          <h3 className="text-2xl">{dog.name}</h3>
          <p>{dog.description}</p>
          <img src={dog.imageUrl} alt={dog.name} />
        </div>
      ))}
    </main>
  );
}
