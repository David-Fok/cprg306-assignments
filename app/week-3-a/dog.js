export default function Dog({ name, breed, age }) {
  return (
    <section className="border-rose-500 border-2 p-2 mb-3">
      <h2 className="text-xl">Dog 1</h2>
      <p className="text-slate-400">Name: {name}</p>
      <p className="text-slate-400">Breed: {breed}</p>
      <p>Age: {age}</p>
    </section>
  );
}
