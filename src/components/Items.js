export default function Items({ item, Delete, Toggle }) {
  return (
    <li key={item.id}>
      <input type="checkbox" onChange={() => Toggle(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button onClick={() => Delete(item.id)}>❌</button>
    </li>
  );
}
