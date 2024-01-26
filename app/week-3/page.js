import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-blue-100">
      <h1 className="text-4xl font-bold text-red-950 mb-3">Shopping List</h1>
      <ItemList />
    </main>
  );
}
