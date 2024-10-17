function NavItem({ dataFile, title, updateSelectedNote }) {
  return (
    <li className="hover:bg-slate-800 rounded">
      <span onClick={() => updateSelectedNote(dataFile)}>{title}</span>
    </li>
  );
}
export default NavItem;
