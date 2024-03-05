"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (Item) => {
    setItems([...items, Item]);
  };

  return (
    <main className="bg-blue-100">
      <h1 className="text-4xl font-bold text-red-950 mb-3">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
