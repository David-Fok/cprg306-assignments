import Dog from "./dog";

export default function Page() {
  const dog1 = {
    name: "Fido",
    breed: "Golden Retriever",
    age: 2,
  };
  const dog2 = {
    name: "Rex",
    breed: "Poodle",
    age: 3,
  };
  const dog3 = {
    name: "Spot",
    breed: "Dalmatian",
    age: 4,
  };

  return (
    <main>
      <Dog name={dog1.name} breed={dog1.breed} age={dog1.age} />
      <Dog {...dog3} />
    </main>
  );
}

/*
      <h1 className="text-4xl font-bold text-slate-300 text-slate-300 mb-3">
        My Favourite Dogs
      </h1>
      <section className="border-rose-500 border-2 p-2 mb-3">
        <h2 className="text-xl">Dog 1</h2>
        <p className="text-slate-400">Name: {dog1.name}</p>
        <p className="text-slate-400">Breed: {dog1.breed}</p>
        <p>Age: {dog1.age}</p>
      </section>
      <section className="border-rose-500 border-2 p-2">
        <h2 className="text-xl">Dog 2</h2>
        <p className="text-slate-400">Name: {dog2.name}</p>
        <p className="text-slate-400">Breed: {dog2.breed}</p>
        <p>Age: {dog2.age}</p>
      </section>
 */
