import { useState } from "react";

export default function Form({ AddOnItem }) {
  const [description, setDesctiption] = useState("");
  const [quantity, setQuantity] = useState(1);

  function HandleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    AddOnItem(newItem);
    setDesctiption("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={HandleSubmit}>
      <h3>What do you need for your 🥰 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
        {/* <option value="1">1</option>
            <option value="2">2</option> */}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDesctiption(e.target.value)}
      />
      <button>add</button>
    </form>
  );
}
