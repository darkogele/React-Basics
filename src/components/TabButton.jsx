export default function TabButton({ label, onSelect, isSelected }) {
  // function handleClick() {
  //   console.log(`You clicked on ${label}`);
  // }

  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>{label}</button>
    </li>
  );
}