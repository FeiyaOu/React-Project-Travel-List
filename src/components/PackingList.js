import { useState } from "react";
import Items from "./Items";

export default function PackingList({
  itemList,
  DeleteItems,
  ToggleItems,
  ClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = itemList;
  if (sortBy === "description")
    sortedItems = itemList
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = itemList
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Items
            item={item}
            Delete={DeleteItems}
            Toggle={ToggleItems}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={() => ClearItems()}>Clear</button>
      </div>
    </div>
  );
}
