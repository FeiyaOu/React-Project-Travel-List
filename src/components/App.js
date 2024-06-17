import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [item, setItem] = useState([]);
  function HandleItems(newItem) {
    setItem((items) => [...items, newItem]);
  }
  function DeleteItems(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }

  function ToggleItems(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function ClearItems() {
    const confirmed = window.confirm("are you sure?");
    if (confirmed) setItem([]);
    else return;
  }

  return (
    <div className="app">
      <Logo />
      <Form AddOnItem={HandleItems} />
      <PackingList
        itemList={item}
        DeleteItems={DeleteItems}
        ToggleItems={ToggleItems}
        ClearItems={ClearItems}
      />
      <Stats items={item} />
    </div>
  );
}

export default App;
