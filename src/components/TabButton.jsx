export default function TabButton({ children, isSelected, ...props }) {
  console.log("Tab() executing");
  return (
    <li>
      <button className={isSelected ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
}
