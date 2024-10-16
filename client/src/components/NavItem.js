function NavItem({ dataFile, title, updateSelectedNote }) {
  return (
    <li>
      <span onClick={() => updateSelectedNote(dataFile)}>{title}</span>
    </li>
  );
}
export default NavItem;
