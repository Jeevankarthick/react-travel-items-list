export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding items to your packing list 🧳</em>
      </footer>
    );
  }

  const numOfItems = items.length;
  const numOfPackedItems = items.filter((item) => item.packed).length;
  const packedItemPercent = Math.round((numOfPackedItems / numOfItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedItemPercent === 100
          ? "You got everything! Ready to travel ✈️"
          : `You have ${numOfItems} items on your list, and you packed
        ${numOfPackedItems} items ${packedItemPercent}%`}
      </em>
    </footer>
  );
}
