"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const [selectedItemName, setSelectedItemName] = useState(null);

  const handleAddItem = (Item) => {
    setItems([...items, Item]);
  };

  function handleItemSelect(item) {
    console.log(item);
    const cleanName = item
      .replace(/[\uD83C-\uDBFF\uDC00-\uDFFF]+/g, "")
      .replace(/[^\x20-\x7E]/g, "")
      .split(",")[0]
      .trim();
    setSelectedItemName(cleanName);
    console.log(cleanName);
  }

  return (
    <main className="bg-blue-100">
      <h1 className="text-4xl font-bold text-red-950 mb-3">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} onItemSelect={handleItemSelect} />
      <div className="flex-1">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
