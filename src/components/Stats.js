export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats">
        <p>Start packing now!</p>
      </footer>
    );
  const numberItems = items.length;
  const numberPacked = items.filter((item) => item.packed === true).length;
  const numberPercentate = Math.round((numberPacked / numberItems) * 100);
  return (
    <footer className="stats">
      <em>
        {numberPercentate === 100
          ? "You have packed everything!"
          : ` You have ${numberItems} items on your list, and you have packed
       ${numberPacked} (${numberPercentate}%)`}
      </em>
    </footer>
  );
}
