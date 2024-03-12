"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <section>
      <div>
        <button
          className="border-yellow-500 border-2 w-36 m-5 p-2 rounded-xl bg-rose-200 hover:bg-blue-300 active:bg-yellow-300"
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className="border-yellow-500 border-2 w-36 m-5 p-2 rounded-xl bg-rose-200 hover:bg-blue-300 active:bg-yellow-300"
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
      </div>
      <div>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={onItemSelect}
          />
        ))}
      </div>
    </section>
  );
}
