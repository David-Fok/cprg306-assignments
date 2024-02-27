export default function Item({ name, quantity, category }) {
  return (
    <section className="border-yellow-500 border-2 w-96 m-5 p-2 bg-yellow-50">
      <p className="text-xl">{name}</p>
      <p>
        Buy {quantity} in {category}
      </p>
    </section>
  );
}
